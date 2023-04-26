import { SubCategoryModel } from "../models/sub-category.model";

const getAllSubCategories = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const category = await SubCategoryModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return category;
};

const updateSubCategories = async (id: any, name: string, image: string) => {
  const updateCat = await SubCategoryModel.update(
    {
      name,
      image,
    },
    { where: { id } }
  );

  return updateCat;
};

const createSubCategory = async (name: string, image: string): Promise<any> => {
  const category = await SubCategoryModel.create({
    name,
    image,
  });

  return category;
};
export { getAllSubCategories, createSubCategory, updateSubCategories };
