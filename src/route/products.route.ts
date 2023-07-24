import {
  getAllProducts,
  addProduct,
  getCategoryProducts,
  getSearchProducts,
  getSubCategoryProducts,
  updateProducts,
  getProductsById,
  getProductsByIdImage,
  getSubSubCategoryProducts,
} from "../controller/products.controller";
import { Express } from "express";
const productRoute = (app: Express) => {
  app.get("/getproducts", getAllProducts);
  app.get("/get-products-by-id", getProductsById);
  app.get("/get-products-by-id-images", getProductsByIdImage);
  app.get("/getproducts/search", getSearchProducts);
  app.post("/postproduct", addProduct);
  app.post("/updateproduct", updateProducts);
  app.get("/get-category-products", getCategoryProducts);
  app.get("/get-sub-category-products", getSubCategoryProducts);
  app.get("/get-sub-sub-category-products", getSubSubCategoryProducts);
};
export { productRoute };
