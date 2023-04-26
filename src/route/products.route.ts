import {
  getAllProducts,
  addProduct,
  updateProducts,
} from "../controller/products.controller";
import { Express } from "express";
const productRoute = (app: Express) => {
  app.get("/getproducts", getAllProducts);
  app.post("/postproduct", addProduct);
  app.post("/updateproduct", updateProducts);
};
export { productRoute };
