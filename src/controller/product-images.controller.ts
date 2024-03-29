import {
  getCurrentUserCart,
  createCart,
  updateCart,
  getAllSingleProductCart,
  removeCart,
} from "../service/cart.service";
import { createImage } from "../service/product-images.service";

const getAllCarts = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getAllSingleProductCart(
    req.query.page,
    req.query.size,
    req.query.sort,
    req.query.order,
    req.query.productId
  )
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const getCurrentUserCarts = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getCurrentUserCart(
    req.query.page,
    req.query.size,
    req.query.sort,
    req.query.order,
    req.query.userId
  )
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};
const addCart = async (req: any, res: any) => {
  try {
    const { productId, name } = req.body;
    const Category = await createImage(productId, name);
    return res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateCarts = async (req: any, res: any) => {
  try {
    const { productId, quantity } = req.body;
    const result = await updateCart(productId, quantity);
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const removeCarts = async (req: any, res: any, next: any) => {
  console.log(req.query);
  removeCart(req.query.id)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

export { getAllCarts, addCart, getCurrentUserCarts, updateCarts, removeCarts };
