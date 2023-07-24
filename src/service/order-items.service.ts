import { OrderModel } from "../models/order.model";
import { ProductModel } from "../models/product.model";
import { UserAddressModel } from "../models/user-address.model";

const getAllOrder = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const Order = await OrderModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return Order;
};

const updateOrder = async (id: any, name: string) => {
  const update = await OrderModel.update(
    {
      name,
    },
    { where: { id } }
  );

  return update;
};

const createOrder = async (
  userId: string,
  products: Array<{ productId: string }>,
  userAddressId: string
): Promise<any> => {
  const orders: any = [];

  for (const product of products) {
    const { productId } = product;
    const order = await OrderModel.create({
      userId,
      productId,
      userAddressId,
    });

    orders.push(order);
  }

  return orders;
};

const getCurrentUserOrder = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  userId: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;

  const category = await OrderModel.findAll({
    nest: true,
    where: {
      userId,
    },

    order: [[sortBy, sortOrder]],
    include: [
      { model: ProductModel, nested: true },
      { model: UserAddressModel, nested: true },
    ],
    offset,
    limit,
  });

  return category;
};
export { getAllOrder, createOrder, updateOrder, getCurrentUserOrder };
