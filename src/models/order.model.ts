import { sequelize } from "../util/connection.util";
import { DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { ProductModel } from "./product.model";
import { UserModel } from "./user.model";
import { UserAddressModel } from "./user-address.model";

const OrderModel = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalCost: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
  }
);

export { OrderModel };
UserModel.hasMany(OrderModel);
OrderModel.belongsTo(UserModel);
