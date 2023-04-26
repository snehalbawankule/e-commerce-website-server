import { CategoryModel } from "../models/category.model";

const getAllCategories = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const category = await CategoryModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return category;
};

const updateCategories = async (id: any, name: string, image: string) => {
  const updateCat = await CategoryModel.update(
    {
      name,
      image,
    },
    { where: { id } }
  );

  return updateCat;
};

const createCategory = async (name: string, image: string): Promise<any> => {
  const category = await CategoryModel.create({
    name,
    image,
  });

  return category;
};
export { getAllCategories, createCategory, updateCategories };
