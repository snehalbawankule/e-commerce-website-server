import { ProductModel } from "../models/product.model";
import { UserModel } from "../models/user.model";
import { WishlistModel } from "../models/wishlist.model";

//Used for get wishlist for single product and multiple users
const getAllSingleProductWishlist = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  productId: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;

  const category = await WishlistModel.findAll({
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

//Used for get wishlist for single user and multiple products
const getAllCurrentUserWishList = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  userId: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;

  const category = await WishlistModel.findAll({
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

const updateWishlist = async (
  product_id: string,
  userName: string,
  quantity: number,
  size: string,
  color: string
) => {
  const updatePro = await WishlistModel.update(
    {
      product_id,
      userName,
      quantity,
      size,
      color,
    },
    { where: { product_id } }
  );

  return updatePro;
};

const createWishlist = async (
  userEmail: string,
  productId: string,
  quantity: number,
  size: string,
  color: string
): Promise<any> => {
  const wishlist = await WishlistModel.create({
    userEmail,
    productId,
    quantity,
    size,
    color,
  });

  return wishlist;
};

const removeWishlist = async (id: string): Promise<any> => {
  const user = await WishlistModel.destroy({
    where: {
      id,
    },
  });

  return user;
};
export {
  getAllSingleProductWishlist,
  getAllCurrentUserWishList,
  createWishlist,
  updateWishlist,
  removeWishlist,
};
