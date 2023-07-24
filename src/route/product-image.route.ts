import { Express } from "express";
import { getProductByIdImages } from "../service/products.service";
import { addCart } from "../controller/product-images.controller";
const productImageRoute = (app: Express) => {
  app.get("/getProductImage", getProductByIdImages);
  app.post("/postProductImage", addCart);
};
export { productImageRoute };
