import { Sequelize, Model, DataTypes } from "sequelize";

export const sequelize = new Sequelize("sqlite::memory:");

export const News = sequelize.define("News", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  desc: DataTypes.STRING,
});

export const Projects = sequelize.define("Projects", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  scope: DataTypes.STRING,
  image: DataTypes.STRING,
  desc: DataTypes.STRING,
});

export const Reports = sequelize.define("Reports", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  country: DataTypes.STRING,
  image: DataTypes.STRING,
  desc: DataTypes.STRING,
});
