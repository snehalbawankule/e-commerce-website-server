import {
  getAllSubCategories,
  createSubCategory,
  updateSubCategories,
} from "../service/sub-sub-category.service";

const getAllSubCategory = async (req: any, res: any, next: any) => {
  getAllSubCategories(
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

const addSubCategory = async (req: any, res: any) => {
  try {
    const { subCategoryId, name } = req.body;
    const Category = await createSubCategory(subCategoryId, name);
    return res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateSubCategory = async (req: any, res: any) => {
  try {
    const { id, categoryId, name } = req.body;
    const result = await updateSubCategories(id, categoryId, name);
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAllSubCategory, addSubCategory, updateSubCategory };
