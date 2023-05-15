import { sequelize } from "../util/connection.util";
import { Sequelize, DataTypes } from "sequelize";
import { randomUUID } from "crypto";

const ProductModel = sequelize.define(
  "products",
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
    title: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(700),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actualPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export { ProductModel };
