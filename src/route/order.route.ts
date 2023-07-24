import { Express } from "express";
import {
  getAllOrders,
  getOrderById1,
  createOrder,
  updateOrders,
} from "../controller/order.controller";
const orderRoute = (app: Express) => {
  app.get("/get-orders", getAllOrders);
  app.get("/get-orders-by-id", getOrderById1);
  app.post("/post-order", createOrder);
  app.post("/update-order", updateOrders);
};
export { orderRoute };
