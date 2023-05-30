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

const updateUser = async (
  id: any,
  firstname: string,
  lastname: string,
  email: string
) => {
  const updatePro = await UserModel.update(
    {
      firstname,
      lastname,
      email,
    },
    { where: { id } }
  );

  return updatePro;
};
export { getAllUsers, createUser, userCheck, forgetPass, updateUser };
