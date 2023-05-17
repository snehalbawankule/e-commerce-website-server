import {
  getAllSubCategory,
  addSubCategory,
  updateSubCategory,
} from "../controller/sub-sub-category.controller";
import { Express } from "express";
const subSubCategoryRoute = (app: Express) => {
  app.get("/get-sub-sub-category", getAllSubCategory);
  app.post("/post-sub-sub-category", addSubCategory);
  app.post("/update-sub-sub-category", updateSubCategory);
};
export { subSubCategoryRoute };
