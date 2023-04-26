import {
  getAllArticles,
  createArticle,
  updateArticle,
} from "../service/articles.service";

const getAll = async (req: any, res: any, next: any) => {
  console.log(req.query);
  getAllArticles(
    req.query.page,
    req.query.size,
    req.query.sort,
    req.query.order
  )
    .then((result) => {
      //console.log(req.query);
      res.json(result);
      next;
    })

    .catch((err) => {
      res.json({ err }).status(500);
    });
};

const addArticle = async (req: any, res: any) => {
  try {
    const { title, description, content, url } = req.body;
    const Article = await createArticle(title, description, content, url);
    return res.json(Article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateArticles = async (req: any, res: any) => {
  try {
    const { id, title, description, content, url } = req.body;
    const result = await updateArticle(id, title, description, content, url);
    return res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAll, addArticle, updateArticles };
