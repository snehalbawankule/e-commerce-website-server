import { BrandModel } from "../models/brand.model";

const getAllBrands = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const Brand = await BrandModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return Brand;
};

const updateBrands = async (id: any, name: string, image: string) => {
  const update = await BrandModel.update(
    {
      name,
      image,
    },
    { where: { id } }
  );

  return update;
};

const createBrand = async (name: string, image: string): Promise<any> => {
  const Brand = await BrandModel.create({
    name,
    image,
  });

  return Brand;
};
export { getAllBrands, createBrand, updateBrands };
