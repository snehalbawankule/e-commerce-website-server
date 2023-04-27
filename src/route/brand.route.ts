import {
  getAllBrand,
  addBrand,
  updateBrand,
} from "../controller/brand.controller";
import { Express } from "express";
const brandRoute = (app: Express) => {
  app.get("/getbrand", getAllBrand);
  app.post("/postbrand", addBrand);
  app.post("/updatebrand", updateBrand);
};
export { brandRoute };
