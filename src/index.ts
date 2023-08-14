import express from "express";
import cors from "cors";
let app = express();
app.use(cors());
app.use(express.json());
import bodyParser from "body-parser";
import { userRoute } from "./route/user.route";
import { sequelize } from "./util/connection.util";
import { productRoute } from "./route/products.route";

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
import { reviewsRoute } from "./route/reviews.route";
import { orderRoute } from "./route/order.route";
import { productImageRoute } from "./route/product-image.route";
import Jwt from "jsonwebtoken";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Your secret key to sign the token. This should be kept secure and not exposed publicly.
const secretKey = "your_secret_key";

// Payload containing the data you want to include in the token (e.g., user information, roles, etc.).
const payload = {
  userId: 123,
  username: "example_user",
  role: "admin",
};

// Options for the JWT token, such as expiration time.
const options = {
  expiresIn: "1h", // Token will expire in 1 hour (you can use other formats like '2 days', '10h', '30d', etc.).
};

// Generate the JWT token.
const token = Jwt.sign(payload, secretKey, options);

console.log("Generated JWT Token:", token);
wishlistRoute(app);
helpCenterRoute(app);
orderRoute(app);
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
reviewsRoute(app);
productImageRoute(app);
sequelize
  .sync({ alter: true })
  .then((result) => console.log("database sync successfully"));
app.listen(3001, function () {
  console.log("Node app is running on port 3001");
});
