import { UserModel } from "../models/user.model";

const getAllUsers = async () => {
  return UserModel.findAll({});
};

const userCheck = async (email: string) => {
  return UserModel.findOne({ where: { email: email } });
};
const createUser = async (
  firstname: string,
  lastname: string,
  email: string,

  password: string
): Promise<any> => {
  const user = await UserModel.create({
    firstname,
    lastname,
    email,
    password,
  });

  return user;
};

const forgetPass = async (email: string) => {
  return UserModel.findOne({ where: { email } });
};

export { getAllUsers, createUser, userCheck, forgetPass };
