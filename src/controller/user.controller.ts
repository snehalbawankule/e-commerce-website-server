import { getAllUsers, createUser, userCheck } from "../service/user.service";
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");

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
    const user = await userCheck(email);
    if (!user) {
      return res.send({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user?.dataValues.password);
    console.log(password, user?.dataValues.password);
    if (isMatch) {
      return res.send({ message: "Invalid password" });
    }
    return res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const forgetPassword = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user = await userCheck(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const resetToken = uuidv4();
    await user.update({ resetToken });
    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "330bb858a59d15",
        pass: "6baeb0975a1a1b",
      },
    });
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      to: email,
      subject: "Reset your password",
      html: `Click <a href="${resetLink}">here</a> to reset your password.`,
    });

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export { getAll, addUser, checkUser, forgetPassword };
