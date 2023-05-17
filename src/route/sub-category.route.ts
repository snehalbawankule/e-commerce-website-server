import {
  getAllSubCategory,
  addSubCategory,
  updateSubCategory,
} from "../controller/sub-category.controller";
import { Express } from "express";
const subCategoryRoute = (app: Express) => {
  app.get("/get-sub-category", getAllSubCategory);
  app.post("/post-sub-category", addSubCategory);
  app.post("/update-sub-category", updateSubCategory);
};
export { subCategoryRoute };
