import {
  getAllWishlists,
  addWishlist,
  updateWishlists,
  getAllCurrentUserWishLists,
  removeWishlists,
} from "../controller/wishlist.controller";
import { Express } from "express";
const wishlistRoute = (app: Express) => {
  app.get("/getwishlist", getAllWishlists);
  app.post("/postwishlist", addWishlist);
  app.post("/updatewishlist", updateWishlists);
  app.get("/getCurrent", getAllCurrentUserWishLists);
  app.delete("/removewishlist", removeWishlists);
};
export { wishlistRoute };
