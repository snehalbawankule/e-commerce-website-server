import {
  getAllCurrentUserWishList,
  createWishlist,
  updateWishlist,
  getAllSingleProductWishlist,
  removeWishlist,
} from "../service/wishlist.service";

const getAllWishlists = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getAllSingleProductWishlist(
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

const getAllCurrentUserWishLists = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getAllCurrentUserWishList(
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
const addWishlist = async (req: any, res: any) => {
  try {
    const { userId, productId, quantity, size, color } = req.body;
    const Category = await createWishlist(
      userId,
      productId,
      quantity,
      size,
      color
    );
    return res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateWishlists = async (req: any, res: any) => {
  try {
    const { product_id, userName, quantity, size, color } = req.body;
    const result = await updateWishlist(
      product_id,
      userName,
      quantity,
      size,
      color
    );
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const removeWishlists = async (req: any, res: any, next: any) => {
  console.log(req.query);
  removeWishlist(req.query.id)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

export {
  getAllWishlists,
  addWishlist,
  getAllCurrentUserWishLists,
  updateWishlists,
  removeWishlists,
};
