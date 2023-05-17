import { sequelize } from "../util/connection.util";
import { Sequelize, DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { SubCategoryModel } from "./sub-category.model";
const SubSubCategoryModel = sequelize.define(
  "sub_sub_category",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
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

export { SubSubCategoryModel };

SubCategoryModel.hasMany(SubSubCategoryModel);
SubSubCategoryModel.belongsTo(SubCategoryModel);
