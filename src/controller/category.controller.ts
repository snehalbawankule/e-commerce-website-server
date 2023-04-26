import {
  getAllCategories,
  createCategory,
  updateCategories,
} from "../service/category.service";

const getAllCategory = async (req: any, res: any, next: any) => {
  getAllCategories(
    req.query.page,
    req.query.size,
    req.query.sort,
    req.query.order
  )
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const addCategory = async (req: any, res: any) => {
  try {
    const { name, image } = req.body;
    const Category = await createCategory(name, image);
    return res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateCategory = async (req: any, res: any) => {
  try {
    const { id, name, image } = req.body;
    const result = await updateCategories(id, name, image);
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAllCategory, addCategory, updateCategory };
