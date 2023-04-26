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
    const { email, name, profile, password } = req.body;
    const user = await createUser(email, name, profile, password);
    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const checkUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const user = await userCheck(email);
    if (!user) {
      return res.send({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user?.dataValues.password);
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
