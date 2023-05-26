import { createHelpCenter, getHelpCenter } from "../service/helpcenter.service";

const getHelpCenters = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getHelpCenter(req.query.page, req.query.size, req.query.sort, req.query.order)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};
const addHelpCenter = async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const Category = await createHelpCenter(name);
    return res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getHelpCenters, addHelpCenter };
