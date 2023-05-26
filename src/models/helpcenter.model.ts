import { sequelize } from "../util/connection.util";
import { DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { ProductModel } from "./product.model";
import { UserModel } from "./user.model";

const HelpCenterModel = sequelize.define(
  "helpCenter",
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

export { HelpCenterModel };

// ProductModel.hasMany(HelpCenterModel);
// HelpCenterModel.belongsTo(ProductModel);

// UserModel.hasMany(HelpCenterModel);
// HelpCenterModel.belongsTo(UserModel);
