import { Express } from "express";
import {
  getAllOrders,
  getOrdersById,
  postOrder,
  updateOrders,
} from "../controller/order.controller";
const orderRoute = (app: Express) => {
  app.get("/get-orders", getAllOrders);
  app.get("/get-orders-by-id", getOrdersById);
  app.post("/post-order", postOrder);
  app.post("/update-order", updateOrders);
};
export { orderRoute };
