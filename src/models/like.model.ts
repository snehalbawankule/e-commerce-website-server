import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection.util";
import { ArticleModel } from "./product.model";

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
ArticleModel.hasMany(LikeModel, { foreignKey: "id", as: "likes" });
LikeModel.belongsTo(ArticleModel, {
  foreignKey: "id",
  as: "article",
});

export { LikeModel };
