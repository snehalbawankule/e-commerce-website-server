import { UserModel } from "../models/user.model";

const getAllUsers = async () => {
  return UserModel.findAll({});
};

const userCheck = async (email: string) => {
  return UserModel.findOne({ where: { email: email } });
};
const createUser = async (
  name: string,
  email: string,
  profile: string,
  password: string
): Promise<any> => {
  const user = await UserModel.create({
    name,
    email,
    profile,
    password,
  });

  return user;
};

export { getAllUsers, createUser, userCheck };
