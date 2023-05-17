import {
  getAllCategories,
  addCategory,
  getCategory,
  updateCategory,
  getAllCategoriesWithoutname,
} from "../controller/category.controller";
import { Express } from "express";
const categoryRoute = (app: Express) => {
  app.get("/get-category", getCategory);
  app.post("/post-category", addCategory);
  app.post("/update-category", updateCategory);
  app.get("/get-all-category", getAllCategories);
  app.get("/get-all-cat", getAllCategoriesWithoutname);
};
export { categoryRoute };
