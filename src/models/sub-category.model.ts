import { sequelize } from "../util/connection.util";
import { Sequelize, DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { CategoryModel } from "./category.model";
const SubCategoryModel = sequelize.define(
  "sub_category",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export { SubCategoryModel };

CategoryModel.hasMany(SubCategoryModel);
SubCategoryModel.belongsTo(CategoryModel);
