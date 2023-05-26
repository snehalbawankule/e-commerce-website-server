import { sequelize } from "../util/connection.util";
import { Sequelize, DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { UserModel } from "./user.model";

const UserAddressModel = sequelize.define(
  "user_address",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    address_line1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_line2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export { UserAddressModel };

UserModel.hasMany(UserAddressModel);
UserAddressModel.belongsTo(UserModel);
