import { ArticleModel } from "../models/product.model";
import { CommentModel } from "../models/comments.model";

const getAllComments = async () => {
  return CommentModel.findAll({});
};

const createComment = async (
  id: string,
  commentId: string,
  userName: string,
  userProfile: string,
  rating: number,
  comment: string,
  isReply: boolean,
  replyTo: string
): Promise<any> => {
  const comments = await CommentModel.create({
    id,
    commentId,
    userName,
    userProfile,
    rating,
    comment,
    isReply,
    replyTo,
  });

  return comments;
};
export { getAllComments, createComment };
