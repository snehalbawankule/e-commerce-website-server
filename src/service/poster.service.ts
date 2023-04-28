import { PosterModel } from "../models/poster.model";

const getAllPosters = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;
  const Poster = await PosterModel.findAll({
    nest: true,
    order: [[sortBy, sortOrder]],
    offset,
    limit,
  });
  return Poster;
};

const updatePosters = async (id: any, name: string, image: string) => {
  const update = await PosterModel.update(
    {
      name,
      image,
    },
    { where: { id } }
  );

  return update;
};

const createPoster = async (name: string, image: string): Promise<any> => {
  const Poster = await PosterModel.create({
    name,
    image,
  });

  return Poster;
};
export { getAllPosters, createPoster, updatePosters };
