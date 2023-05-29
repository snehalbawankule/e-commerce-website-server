import { Express } from "express";
import {
  addUserAddress,
  getAllUserAddress,
} from "../controller/user-address.controller";

const userAddressRoute = (app: Express) => {
  app.get("/get-user-address", getAllUserAddress);
  app.post("/post-user-address", addUserAddress);
};

export { userAddressRoute };
