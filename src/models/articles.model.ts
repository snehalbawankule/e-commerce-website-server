import { sequelize } from "../util/connection.util";
import { Sequelize, DataTypes } from "sequelize";
import { randomUUID } from "crypto";

const ArticleModel = sequelize.define(
  "articles",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export { ArticleModel };
