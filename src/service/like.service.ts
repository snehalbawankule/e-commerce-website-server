import { LikeModel } from "../models/like.model";

const getAllLikes = async () => {
  return LikeModel.findAll({});
};

const addLike = async (id: string, userEmail: string): Promise<any> => {
  const user = await LikeModel.create({
    id,
    userEmail,
  });

  return user;
};
const unlike = async (id: string, userEmail: string): Promise<any> => {
  const user = await LikeModel.destroy({
    where: {
      id,
      userEmail,
    },
  });

  return user;
};

export { getAllLikes, addLike, unlike };
