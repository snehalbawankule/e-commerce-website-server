import { Captain, Ship } from "../models/exp.model";
const awesomeCaptain = async () => {
  return Captain.findAll({
    where: {
      name: "abc",
    },
    raw: true,
    include: [{ all: true, nested: true }],
  });
};
// Now the ship comes with it
export { awesomeCaptain };
