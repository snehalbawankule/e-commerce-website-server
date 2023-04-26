import { Sequelize } from "sequelize";

const sequelize = new Sequelize("user-info", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: true,
});

export { sequelize };
