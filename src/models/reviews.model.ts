import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection.util";
import { ProductModel } from "./product.model";
import { UserModel } from "./user.model";
// import { ArticleModel } from "./product.model";
import { randomUUID } from "crypto";

const ReviewModel = sequelize.define(
  "review",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
ProductModel.hasMany(ReviewModel);
ReviewModel.belongsTo(ProductModel);

UserModel.hasMany(ReviewModel);
ReviewModel.belongsTo(UserModel);

export { ReviewModel };
