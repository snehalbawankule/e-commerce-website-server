import { getAllComments, createComment } from "../service/comments.service";

const getAll = async (req: any, res: any) => {
  getAllComments()
    .then((result: any) => {
      res.json(result);
      console.log(result);
      console.log(result.length);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

const addComment = async (req: any, res: any) => {
  try {
    const {
      id,
      commentId,
      userName,
      userProfile,
      rating,
      comment,
      isReply,
      replyTo,
    } = req.body;
    const Article = await createComment(
      id,
      commentId,
      userName,
      userProfile,
      rating,
      comment,
      isReply,
      replyTo
    );
    return res.json(Article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getAll, addComment };
