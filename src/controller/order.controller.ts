import {
  getAllOrder,
  updateOrder,
  createOrder1,
  getOrderById,
  getCurrentUserOrder,
} from "../service/orders.service";
import { removeCartss } from "./cart.controller";

const getAllOrders = async (req: any, res: any, next: any) => {
  getAllOrder(req.query.page, req.query.size, req.query.sort, req.query.order)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const createOrder = async (req: any, res: any) => {
  try {
    const { userId, shippingAddress, totalCost, items } = req.body;
    const order = await createOrder1(userId, shippingAddress, totalCost, items);
    removeCartss(req, res, () => {
      res.status(201).json({ message: "Order created successfully", order });
    });

    // res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateOrders = async (req: any, res: any) => {
  try {
    const { id, name, image } = req.body;
    const result = await updateOrder(id, name);
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const getOrderById1 = async (req: any, res: any) => {
  try {
    const { page, size, sort, order, userId } = req.query;
    const orders = await getCurrentUserOrder(page, size, sort, order, userId);

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { getAllOrders, createOrder, updateOrders, getOrderById1 };
