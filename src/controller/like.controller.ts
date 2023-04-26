import { getAllLikes, addLike, unlike } from "../service/like.service";

const getAll = async (req: any, res: any) => {
  getAllLikes()
    .then((result: any) => {
      res.json(result);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

const addlike = async (req: any, res: any) => {
  try {
    const { id, userEmail } = req.body;
    const Article = await addLike(id, userEmail);
    return res.json(Article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const unLike = async (req: any, res: any) => {
  try {
    const { id, userEmail } = req.body;
    const Article = await unlike(id, userEmail);
    return res.json(Article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAll, addlike, unLike };
