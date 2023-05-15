import { DataTypes } from "sequelize";
import { sequelize } from "../util/connection.util";

// This is the setup of our models for the examples below
const Ship = sequelize.define(
  "ship",
  {
    name: DataTypes.TEXT,
    crewCapacity: DataTypes.INTEGER,
    amountOfSails: DataTypes.INTEGER,
  },
  { timestamps: false }
);
const Captain = sequelize.define(
  "captain",
  {
    name: DataTypes.TEXT,
    skillLevel: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 10 },
    },
  },
  { timestamps: false }
);
Captain.hasOne(Ship);
Ship.belongsTo(Captain);

export { Ship, Captain };
