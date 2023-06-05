import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection.util";
const bcrypt = require("bcrypt");
import { randomUUID } from "crypto";

const UserModel = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resetToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
UserModel.beforeCreate((user: any) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash: any) => {
      user.password = hash;
    })
    .catch((err: any) => {
      throw new Error();
    });
});
UserModel.afterCreate((user: any, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash: any) => {
      user.password = hash;
      return user.save({ fields: ["password"], returning: true });
    })
    .catch((err: any) => {
      throw new Error();
    });
});

export { UserModel };
