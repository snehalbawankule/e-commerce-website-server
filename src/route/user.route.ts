import {
  getAll,
  addUser,
  checkUser,
  forgetPassword,
} from "../controller/user.controller";
import { Express } from "express";

const userRoute = (app: Express) => {
  app.get("/getuser", getAll);
  app.post("/postuser", addUser);
  app.post("/checkuser", checkUser);
  app.post("/forgetPassword", forgetPassword);
};
export { userRoute };
