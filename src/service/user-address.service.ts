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
  name: string,
  mobile: string,
  address_line1: string,
  address_line2: string,
  city: string,
  postal_code: string,
  state: string,
  country: string,
  alternative_mobile: string,
  address_type: string
) => {
  const update = await UserAddressModel.update(
    {
      name,
      mobile,
      address_line1,
      address_line2,
      city,
      postal_code,
      state,
      country,
      alternative_mobile,
      address_type,
    },
    { where: { id } }
  );

  return update;
};

const createUserAddress = async (
  userId: string,
  name: string,
  mobile: Number,
  address_line1: string,
  address_line2: string,
  city: string,
  postal_code: Number,
  state: string,
  country: string,
  alternative_mobile: Number,
  address_type: string
): Promise<any> => {
  const UserAddress = await UserAddressModel.create({
    userId,
    name,
    mobile,
    address_line1,
    address_line2,
    city,
    postal_code,
    state,
    country,
    alternative_mobile,
    address_type,
  });

  return UserAddress;
};

const removeUserAddress = async (id: string): Promise<any> => {
  const remove = await UserAddressModel.destroy({ where: { id } });
  return remove;
};
export {
  getCurrentUserAddresss,
  createUserAddress,
  updateUserAddresss,
  removeUserAddress,
};
