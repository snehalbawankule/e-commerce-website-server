import { getAllComments, createComment } from "../service/comments.service";
import { awesomeCaptain } from "../service/exp.service";

const getAll = async (res: any) => {
  awesomeCaptain()
    .then((result: any) => {
      //res.json(result);
      console.log(result);
      console.log(result.length);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export { getAll };
