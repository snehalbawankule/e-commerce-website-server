import { getAllUsers, createUser, userCheck } from "../service/user.service";
const bcrypt = require("bcrypt");

const getAll = async (req: any, res: any) => {
  getAllUsers()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const addUser = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const user = await createUser(name, email, password);
    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const checkUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    console.log("password" + password);
    const user = await userCheck(email);
    if (!user) {
      return res.send({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(
      "$2b$10$diEzJqtO0FZOCU1bX7M5x.ow4qBkA9PhZM/2CPKnD73e9g5ckB8Cm",
      user?.dataValues.password
    );
    console.log(password, user?.dataValues.password);
    if (!isMatch) {
      return res.send({ message: "Invalid password" });
    }
    return res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAll, addUser, checkUser };
