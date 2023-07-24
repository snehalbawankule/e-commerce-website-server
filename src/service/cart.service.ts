import { ProductModel } from "../models/product.model";
import { UserModel } from "../models/user.model";
import { CartModel } from "../models/cart.model";

//Used for get cart for single product and multiple users
const getAllSingleProductCart = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  productId: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;

  const category = await CartModel.findAll({
    nest: true,
    where: {
      productId,
    },
    order: [[sortBy, sortOrder]],
    include: [{ model: ProductModel, nested: true }],
    offset,
    limit,
  });
  return category;
};

//Used for get cart for single user and multiple products
const getCurrentUserCart = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  userId: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;

  const category = await CartModel.findAll({
    nest: true,
    where: {
      userId,
    },

    order: [[sortBy, sortOrder]],
    include: [{ model: ProductModel, nested: true }],
    offset,
    limit,
  });
  return category;
};

const updateCart = async (
  productId: string,

  quantity: number
) => {
  const updatePro = await CartModel.update(
    {
      quantity,
    },
    { where: { productId } }
  );

  return updatePro;
};

const createCart = async (
  userId: string,
  productId: string,
  quantity: number,
  size: string,
  color: string
): Promise<any> => {
  const cart = await CartModel.create({
    userId,
    productId,
    quantity,
    size,
    color,
  });

  return cart;
};
const removeCart = async (id: string): Promise<any> => {
  const user = await CartModel.destroy({
    where: {
      id,
    },
  });

  return user;
};
export {
  getAllSingleProductCart,
  getCurrentUserCart,
  createCart,
  updateCart,
  removeCart,
};
