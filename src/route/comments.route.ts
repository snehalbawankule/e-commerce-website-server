import { getAll, addComment } from "../controller/comments.controller";
import { Express } from "express";

const commentRoute = (app: Express) => {
  app.get("/getcomments", getAll);
  app.post("/postcomments", addComment);
};

export { commentRoute };
