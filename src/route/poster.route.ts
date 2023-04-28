import {
  getAllPoster,
  addPoster,
  updatePoster,
} from "../controller/poster.controller";
import { Express } from "express";
const posterRoute = (app: Express) => {
  app.get("/getposter", getAllPoster);
  app.post("/postposter", addPoster);
  app.post("/updateposter", updatePoster);
};
export { posterRoute };
