import { getProductReview, newReview } from "../service/reviews.service";

const getProductReviews = async (req: any, res: any) => {
  getProductReview(req.query.productId)
    .then((result: any) => {
      res.json(result);
      console.log(result);
      console.log(result.length);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

const addProductReview = async (req: any, res: any) => {
  try {
    const { productId, userId, rating, image, title, description } = req.body;
    const Review = await newReview(
      productId,
      userId,
      rating,
      image,
      title,
      description
    );
    return res.json(Review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getProductReviews, addProductReview };
