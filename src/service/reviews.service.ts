import { ReviewModel } from "../models/reviews.model";

const getProductReview = async (productId: string) => {
  return ReviewModel.findAll({ where: { productId } });
};

const newReview = async (
  productId: string,
  userId: string,
  rating: number,
  image: string,
  title: string,
  description: string
): Promise<any> => {
  const review = await ReviewModel.create({
    productId,
    userId,
    rating,
    image,
    title,
    description,
  });

  return review;
};
export { getProductReview, newReview };
