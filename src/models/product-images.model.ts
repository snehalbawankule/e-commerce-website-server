import { sequelize } from "../util/connection.util";
import { DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { ProductModel } from "./product.model";

const ProductImagesModel = sequelize.define(
  "product_images",
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

export { ProductImagesModel };

ProductModel.hasMany(ProductImagesModel);
ProductImagesModel.belongsTo(ProductModel);
