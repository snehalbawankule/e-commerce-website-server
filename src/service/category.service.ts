import { CategoryModel } from "../models/category.model";
import { SubCategoryModel } from "../models/sub-category.model";
import { SubSubCategoryModel } from "../models/sub-sub-category.model";

const getCategories = async (
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

const getAllCategoryWithoutName = async (
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
    include: [
      {
        model: SubCategoryModel,
        order: [["createdAt", "ASC"]],
        include: [{ model: SubSubCategoryModel, nested: true }],
        nested: true,
      },
    ],

    offset,
    limit,
  });
  return category;
};
const getAllCategory = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  name: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const category = await CategoryModel.findAll({
    nest: true,
    where: {
      name: name,
    },

    include: [
      {
        // where:{

        // },
        model: SubCategoryModel,
        include: [{ model: SubSubCategoryModel }],
        nested: true,
      },
    ],
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
export {
  getAllCategory,
  getAllCategoryWithoutName,
  getCategories,
  createCategory,
  updateCategories,
};
