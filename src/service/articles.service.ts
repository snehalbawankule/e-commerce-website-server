import { ArticleModel } from "../models/articles.model";
import { CommentModel } from "../models/comments.model";
import { LikeModel } from "../models/like.model";

const getAllArticles = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const articles = await ArticleModel.findAll({
    include: [{ all: true, nested: true }],
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return articles;
};

const updateArticle = async (
  id: any,
  title: any,
  description: any,
  content: any,
  url: any
) => {
  console.log(title);

  const updateArt = await ArticleModel.update(
    {
      title,
      description,
      content,
      url,
    },
    { where: { id } }
  );

  return updateArt;
};

const createArticle = async (
  title: string,
  description: string,
  content: string,
  url: string
): Promise<any> => {
  const article = await ArticleModel.create({
    title,
    description,
    content,
    url,
  });

  return article;
};
export { getAllArticles, createArticle, updateArticle };
