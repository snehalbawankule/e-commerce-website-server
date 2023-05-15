import { sequelize } from "../util/connection.util";
import { DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { ProductModel } from "./product.model";
import { UserModel } from "./user.model";

const WishlistModel = sequelize.define(
  "wishlist",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export { WishlistModel };

ProductModel.hasMany(WishlistModel);
WishlistModel.belongsTo(ProductModel);

UserModel.hasMany(WishlistModel);
WishlistModel.belongsTo(UserModel);
