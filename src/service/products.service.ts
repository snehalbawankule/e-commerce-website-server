import { ProductImagesModel } from "../models/product-images.model";
import { ProductModel } from "../models/product.model";
import { sequelize } from "../util/connection.util";
const { Op } = require("sequelize");
const getAllProduct = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const category = await ProductModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return category;
};
const getCategoryProduct = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  category: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const product = await ProductModel.findAll({
    nest: true,
    where: [{ category }],
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return product;
};

const getSubCategoryProduct = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  category: any,
  subCategory: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const product = await ProductModel.findAll({
    nest: true,
    where: [
      {
        category,
        subCategory: {
          [Op.like]: `%${subCategory}%`,
        },
      },
    ],
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return product;
};
const getSubSubCategoryProduct = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  category: any,
  subCategory: any,
  sub_subCategory: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const product = await ProductModel.findAll({
    nest: true,

    where: [
      {
        category,
        subCategory: {
          [Op.like]: `%${subCategory}%`,
        },
        sub_subCategory: {
          [Op.like]: `%${sub_subCategory}%`,
        },
      },
    ],
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return product;
};

const getSearchedProduct = async (size: number, q: any) => {
  const limit = size * 1;
  const category = await ProductModel.findAll({
    nest: true,
    limit,
    attributes: {
      exclude: [
        "title",
        "description",
        "image",
        "gender",
        "brand",
        "category",
        "subCategory",
        "actualPrice",
        "discount",
        "discountPrice",
        "createdAt",
        "updatedAt",
      ],
    },
    where: {
      name: sequelize.where(
        sequelize.fn("LOWER", sequelize.col("name")),
        "LIKE",
        "%" + q + "%"
      ),
    },
  });
  return category;
};

const getProductById = async (id: any) => {
  const category = await ProductModel.findOne({
    nest: true,
    where: {
      id,
    },
  });
  return category;
};

const getProductByIdImages = async (id: any) => {
  const category = await ProductModel.findOne({
    nest: true,
    where: {
      id,
    },
    include: [
      {
        model: ProductImagesModel,
      },
    ],
  });
  return category;
};
const updateProduct = async (
  id: any,
  name: string,
  title: string,
  description: string,
  image: string,
  gender: string,
  brand: string,
  category: string,
  subCategory: string,
  actualPrice: number,
  discount: number,
  discountPrice: number
) => {
  const updatePro = await ProductModel.update(
    {
      name,
      title,
      description,
      image,
      gender,
      brand,
      category,
      subCategory,
      actualPrice,
      discount,
      discountPrice,
    },
    { where: { id } }
  );

  return updatePro;
};

const createProduct = async (
  name: string,
  title: string,
  description: string,
  image: string,
  gender: string,
  brand: string,
  category: string,
  subCategory: string,
  sub_subCategory: string,
  actualPrice: number,
  discount: number,
  discountPrice: number
): Promise<any> => {
  // const discountPrice = actualPrice - (actualPrice * discount) / 100;
  const product = await ProductModel.create({
    name,
    title,
    description,
    image,
    gender,
    brand,
    category,
    subCategory,
    sub_subCategory,
    actualPrice,
    discount,
    discountPrice,
  });

  return product;
};
export {
  getAllProduct,
  getCategoryProduct,
  createProduct,
  getSearchedProduct,
  updateProduct,
  getSubSubCategoryProduct,
  getSubCategoryProduct,
  getProductById,
  getProductByIdImages,
};
