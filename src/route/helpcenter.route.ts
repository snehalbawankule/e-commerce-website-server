import {
  getHelpCenters,
  addHelpCenter,
} from "../controller/helpcenter.controller";
import { Express } from "express";
const helpCenterRoute = (app: Express) => {
  app.get("/get-helpcenter", getHelpCenters);
  app.post("/post-helpcenter", addHelpCenter);
};
export { helpCenterRoute };
