import { Express } from "express";
import { getAll } from "../controller/exp.controller";

const expRoute = (app: Express) => {
  app.get("/getOne", getAll);
};

export { expRoute };
