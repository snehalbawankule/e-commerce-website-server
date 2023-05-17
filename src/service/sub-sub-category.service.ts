import { SubSubCategoryModel } from "../models/sub-sub-category.model";

const getAllSubCategories = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const category = await SubSubCategoryModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return category;
};

const updateSubCategories = async (
  id: any,
  subcategoryId: string,
  name: string
) => {
  const updateCat = await SubSubCategoryModel.update(
    {
      subcategoryId,
      name,
    },
    { where: { id } }
  );

  return updateCat;
};

const createSubCategory = async (
  subCategoryId: string,
  name: string
): Promise<any> => {
  const category = await SubSubCategoryModel.create({
    subCategoryId,
    name,
  });

  return category;
};
export { getAllSubCategories, createSubCategory, updateSubCategories };
