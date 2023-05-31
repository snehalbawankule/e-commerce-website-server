import { Express } from "express";
import {
  addUserAddress,
  deleteUserAddress,
  getAllUserAddress,
  updateUserAddress,
} from "../controller/user-address.controller";

const userAddressRoute = (app: Express) => {
  app.get("/get-user-address", getAllUserAddress);
  app.post("/post-user-address", addUserAddress);
  app.put("/update-user-address", updateUserAddress);
  app.delete("/delete-user-address", deleteUserAddress);
};

export { userAddressRoute };
