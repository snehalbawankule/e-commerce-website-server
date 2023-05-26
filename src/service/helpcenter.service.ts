import { HelpCenterModel } from "../models/helpcenter.model";
import { FaqsModel } from "../models/faqs.model";
const getHelpCenter = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;

  const category = await HelpCenterModel.findAll({
    nest: true,

    order: [[sortBy, sortOrder]],
    include: [{ model: FaqsModel, nested: true }],
    offset,
    limit,
  });
  return category;
};

const createHelpCenter = async (name: string): Promise<any> => {
  const helpcenter = await HelpCenterModel.create({
    name,
  });

  return helpcenter;
};

export { getHelpCenter, createHelpCenter };
