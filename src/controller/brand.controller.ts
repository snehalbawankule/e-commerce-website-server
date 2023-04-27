import {
  getAllBrands,
  createBrand,
  updateBrands,
} from "../service/brand.service";

const getAllBrand = async (req: any, res: any, next: any) => {
  getAllBrands(req.query.page, req.query.size, req.query.sort, req.query.order)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const addBrand = async (req: any, res: any) => {
  try {
    const { name, image } = req.body;
    const Brand = await createBrand(name, image);
    return res.json(Brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateBrand = async (req: any, res: any) => {
  try {
    const { id, name, image } = req.body;
    const result = await updateBrands(id, name, image);
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAllBrand, addBrand, updateBrand };
