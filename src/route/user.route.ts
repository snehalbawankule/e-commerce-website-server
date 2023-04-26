import { getAll, addUser, checkUser } from "../controller/user.controller";
import { Express } from "express";
import { verifyToken } from "../service/authentication.service";
const userRoute = (app: Express) => {
  app.get("/user", verifyToken, getAll);
  app.post("/postuser", addUser);
  app.post("/checkuser", checkUser);
};
export { userRoute };
