import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection.util";
import { ProductModel } from "./product.model";

const LikeModel = sequelize.define(
  "like",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: true,
  }
);
ProductModel.hasMany(LikeModel, { foreignKey: "id", as: "likes" });
LikeModel.belongsTo(ProductModel, {
  foreignKey: "id",
  as: "article",
});

export { LikeModel };
