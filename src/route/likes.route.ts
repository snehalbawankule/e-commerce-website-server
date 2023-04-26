import { getAll, addlike, unLike } from "../controller/like.controller";
import { Express } from "express";

const likeRoute = (app: Express) => {
  app.get("/getlikes", getAll);
  app.post("/postlikes", addlike);
  app.post("/unlike", unLike);
};

export { likeRoute };
