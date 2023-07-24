import { ProductImagesModel } from "../models/product-images.model";

const getAllBrands = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const Brand = await ProductImagesModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return Brand;
};

const updateBrands = async (id: any, name: string, image: string) => {
  const update = await ProductImagesModel.update(
    {
      name,
      image,
    },
    { where: { id } }
  );

  return update;
};

const createImage = async (productId: string, name: string): Promise<any> => {
  const Brand = await ProductImagesModel.create({
    productId,
    name,
  });

  return Brand;
};
export { getAllBrands, createImage, updateBrands };
