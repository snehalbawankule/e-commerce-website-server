import { UserAddressModel } from "../models/user-address.model";
import { UserModel } from "../models/user.model";
const getCurrentUserAddresss = async (id: any) => {
  const UserAddress = await UserModel.findOne({
    nest: true,
    where: { id },
    attributes: {
      exclude: ["password"],
    },
    include: [{ model: UserAddressModel, nested: true }],
  });
  return UserAddress;
};

const updateUserAddresss = async (
  id: string,
  userId: string,
  address_line1: string,
  address_line2: string,
  city: string,
  postal_code: Number,
  state: string,
  country: string,
  mobile: Number
) => {
  const update = await UserAddressModel.update(
    {
      userId,
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      mobile,
    },
    { where: { id } }
  );

  return update;
};

const createUserAddress = async (
  userId: string,
  address_line1: string,
  address_line2: string,
  city: string,
  postal_code: Number,
  state: string,
  country: string,
  mobile: Number
): Promise<any> => {
  const UserAddress = await UserAddressModel.create({
    userId,
    address_line1,
    address_line2,
    city,
    postal_code,
    state,
    country,
    mobile,
  });

  return UserAddress;
};
export { getCurrentUserAddresss, createUserAddress, updateUserAddresss };
