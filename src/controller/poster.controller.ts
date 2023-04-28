import {
  getAllPosters,
  createPoster,
  updatePosters,
} from "../service/poster.service";

const getAllPoster = async (req: any, res: any, next: any) => {
  getAllPosters(req.query.page, req.query.size, req.query.sort, req.query.order)
    .then((result) => {
      res.json(result);
      next;
    })
    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const addPoster = async (req: any, res: any) => {
  try {
    const { name, image } = req.body;
    const Poster = await createPoster(name, image);
    return res.json(Poster);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updatePoster = async (req: any, res: any) => {
  try {
    const { id, name, image } = req.body;
    const result = await updatePosters(id, name, image);
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAllPoster, addPoster, updatePoster };
