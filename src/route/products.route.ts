import {
  getAllProducts,
  addProduct,
  getSearchProducts,
  updateProducts,
} from "../controller/products.controller";
import { Express } from "express";
const productRoute = (app: Express) => {
  app.get("/getproducts", getAllProducts);
  app.get("/getproducts/search", getSearchProducts);
  app.post("/postproduct", addProduct);
  app.post("/updateproduct", updateProducts);
};
export { productRoute };
