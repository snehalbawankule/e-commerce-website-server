import { getFaqs, addFaqs } from "../controller/faqs.controller";
import { Express } from "express";
const faqsRoute = (app: Express) => {
  app.get("/get-faqs", getFaqs);
  app.post("/post-faqs", addFaqs);
};
export { faqsRoute };
