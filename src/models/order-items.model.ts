import { sequelize } from "../util/connection.util";
import { DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { ProductModel } from "./product.model";
import { OrderModel } from "./order.model";

const OrderItemsModel = sequelize.define(
  "order_items",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export { OrderItemsModel };
OrderModel.hasMany(OrderItemsModel);
OrderItemsModel.belongsTo(OrderModel);
ProductModel.hasMany(OrderItemsModel);
OrderItemsModel.belongsTo(ProductModel);
