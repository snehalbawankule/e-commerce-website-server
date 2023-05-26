import { UserAddressModel } from "../models/user-address.model";

const getAllUserAddresss = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const UserAddress = await UserAddressModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return UserAddress;
};

const updateUserAddresss = async (
  id: any,
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
  address_line1: string,
  address_line2: string,
  city: string,
  postal_code: Number,
  state: string,
  country: string,
  mobile: Number
): Promise<any> => {
  const UserAddress = await UserAddressModel.create({
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
export { getAllUserAddresss, createUserAddress, updateUserAddresss };
