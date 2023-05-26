import { createFaqs } from "../service/faqs.service";
import { getFaqss } from "../service/faqs.service";
const getFaqs = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getFaqss(
    req.query.page,
    req.query.size,
    req.query.sort,
    req.query.order,
    req.query.helpCenterId
  )
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};
const addFaqs = async (req: any, res: any) => {
  try {
    const { helpCenterId, name } = req.body;
    const Category = await createFaqs(helpCenterId, name);
    return res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getFaqs, addFaqs };
