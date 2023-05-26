import { sequelize } from "../util/connection.util";
import { DataTypes } from "sequelize";
import { randomUUID } from "crypto";
import { HelpCenterModel } from "./helpcenter.model";

const FaqsModel = sequelize.define(
  "faqs",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID,
      primaryKey: true,
      allowNull: false,
    },
    helpCenterId: {
      type: DataTypes.STRING,
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

export { FaqsModel };

HelpCenterModel.hasMany(FaqsModel);
FaqsModel.belongsTo(HelpCenterModel);
