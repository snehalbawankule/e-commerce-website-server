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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

userRoute(app);
productRoute(app);
// commentRoute(app);
// likeRoute(app);
sequelize
  .sync({ alter: true })
  .then((result) => console.log("database sync successfully"));
app.listen(3001, function () {
  console.log("Node app is running on port 3001");
});
