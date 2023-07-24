import { CartModel } from "../models/cart.model";
import { OrderItemsModel } from "../models/order-items.model";
import { OrderModel } from "../models/order.model";
import { ProductModel } from "../models/product.model";
import { UserAddressModel } from "../models/user-address.model";
import { removeCart } from "./cart.service";

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

// const createOrder = async (
//   userId: string,
//   shippingAddress: string
// ): Promise<any> => {
//   const Order = await OrderModel.create(userId, shippingAddress);
//   // const OrderDetails = await OrderDetailModel.create(order_details);
//   return Order;
// };

// Create a new order
const createOrder1 = async (
  userId: any,
  shippingAddress: string,
  totalCost: any,
  items: any
) => {
  try {
    const order = await OrderModel.create({
      userId,
      shippingAddress,
      totalCost,
      items,
    });

    for (const item of items) {
      const { productId, quantity } = item;
      await OrderItemsModel.create({
        orderId: order.dataValues.id,
        productId,
        quantity,
      });
    }
    await CartModel.destroy({
      where: {
        userId,
      },
    });
    return order;
  } catch (error) {
    throw new Error("Failed to create order");
  }
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
const getOrderById = async (userId: string) => {
  try {
    const order = await OrderModel.findAll({
      where: { userId },
      include: [
        {
          model: OrderItemsModel,
          include: [{ model: ProductModel }],
        },
      ],
    });

    if (!order) {
      throw new Error("Order not found");
    }

    return order;
  } catch (error) {
    throw new Error("Failed to fetch order");
  }
};
export {
  getAllOrder,
  createOrder1,
  updateOrder,
  getOrderById,
  getCurrentUserOrder,
};
