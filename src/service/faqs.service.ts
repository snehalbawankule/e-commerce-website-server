import { FaqsModel } from "../models/faqs.model";

const getFaqss = async (
  page: number,
  size: number,
  sortBy: any,
  sortOrder: any,
  helpCenterId: string
) => {
  const limit = size * 1;
  const offset = (page - 1) * limit;

  const category = await FaqsModel.findAll({
    nest: true,
    where: [
      {
        helpCenterId,
      },
    ],
    order: [[sortBy, sortOrder]],

    offset,
    limit,
  });
  return category;
};

const createFaqs = async (helpCenterId: string, name: string): Promise<any> => {
  const faqs = await FaqsModel.create({
    helpCenterId,
    name,
  });

  return faqs;
};

export { getFaqss, createFaqs };
