import {
  getAllCategory,
  addCategory,
  updateCategory,
} from "../controller/category.controller";
import { Express } from "express";
const categoryRoute = (app: Express) => {
  app.get("/getcategory", getAllCategory);
  app.post("/postcategory", addCategory);
  app.post("/updatecategory", updateCategory);
};
export { categoryRoute };
