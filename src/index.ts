import express from "express";
import cors from "cors";
let app = express();
app.use(cors());
app.use(express.json());
import bodyParser from "body-parser";
import { userRoute } from "./route/user.route";
import { sequelize } from "./util/connection.util";
import { productRoute } from "./route/products.route";
import { commentRoute } from "./route/comments.route";
import { likeRoute } from "./route/likes.route";
import { categoryRoute } from "./route/category.route";
import { subCategoryRoute } from "./route/sub-category.route";
import { brandRoute } from "./route/brand.route";
import { posterRoute } from "./route/poster.route";
import { wishlistRoute } from "./route/wishlist.route";
import { subSubCategoryRoute } from "./route/sub-sub-category.route";
import { cartRoute } from "./route/cart.route";
import { helpCenterRoute } from "./route/helpcenter.route";
import { faqsRoute } from "./route/faqs.route";
import { userAddressRoute } from "./route/user-address.route";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

wishlistRoute(app);
helpCenterRoute(app);
faqsRoute(app);
userRoute(app);
brandRoute(app);
posterRoute(app);
productRoute(app);
categoryRoute(app);
subCategoryRoute(app);
subSubCategoryRoute(app);
cartRoute(app);
userAddressRoute(app);
sequelize
  .sync({ alter: true })
  .then((result) => console.log("database sync successfully"));
app.listen(3001, function () {
  console.log("Node app is running on port 3001");
});
