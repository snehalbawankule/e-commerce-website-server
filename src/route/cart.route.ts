import {
  getAllCarts,
  addCart,
  updateCarts,
  getCurrentUserCarts,
  removeCarts,
} from "../controller/cart.controller";
import { Express } from "express";
const cartRoute = (app: Express) => {
  app.get("/get-cart", getAllCarts);
  app.post("/post-cart", addCart);
  app.post("/update-cart", updateCarts);
  app.get("/get-current-user-cart", getCurrentUserCarts);
  app.delete("/remove-cart", removeCarts);
};
export { cartRoute };
