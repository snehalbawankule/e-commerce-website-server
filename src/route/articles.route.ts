import {
  getAll,
  addArticle,
  updateArticles,
} from "../controller/articles.controller";
import { Express } from "express";
const articleRoute = (app: Express) => {
  app.get("/get-articles", getAll);
  app.post("/post-article", addArticle);
  app.post("/update-article", updateArticles);
};
export { articleRoute };
