import {
  getAllProduct,
  createProduct,
  updateProduct,
} from "../service/products.service";

const getAllProducts = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getAllProduct(req.query.page, req.query.size, req.query.sort, req.query.order)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const addProduct = async (req: any, res: any) => {
  try {
    const {
      name,
      title,
      description,
      gender,
      brand,
      category,
      subCategory,
      actualPrice,
      discount,
    } = req.body;
    console.log(req.body);
    const Article = await createProduct(
      name,
      title,
      description,
      gender,
      brand,
      category,
      subCategory,
      actualPrice,
      discount
    );
    return res.json(Article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateProducts = async (req: any, res: any) => {
  try {
    const {
      id,
      name,
      title,
      description,
      gender,
      brand,
      category,
      subCategory,
      actualPrice,
      discount,
    } = req.body;
    const result = await updateProduct(
      id,
      name,
      title,
      description,
      gender,
      brand,
      category,
      subCategory,
      actualPrice,
      discount
    );
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAllProducts, addProduct, updateProducts };