import {
  getProductReviews,
  addProductReview,
} from "../controller/reviews.controller";
import { Express } from "express";

const reviewsRoute = (app: Express) => {
  app.get("/get-product-reviews", getProductReviews);
  app.post("/post-product-review", addProductReview);
};

export { reviewsRoute };
