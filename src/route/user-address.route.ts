import { Express } from "express";
import {
  addUserAddress,
  getAllUserAddress,
} from "../controller/user-address.controller";

const userAddressRoute = (app: Express) => {
  app.get("/user-address", getAllUserAddress);
  app.post("/user-address", addUserAddress);
};

export { userAddressRoute };
