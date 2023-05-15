import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection.util";
// import { ArticleModel } from "./product.model";

const CommentModel = sequelize.define(
  "comment",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commentId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userProfile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    isReply: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    replyTo: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
// ArticleModel.hasMany(CommentModel, { foreignKey: "id", as: "comments" });
// CommentModel.belongsTo(ArticleModel, {
//   foreignKey: "id",
//   as: "article",
// });

export { CommentModel };
