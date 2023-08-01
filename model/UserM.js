// WRITE MODEL FOR USER MYSQL DATA ON NODEJS Sequelize
const Sequelize = require("sequelize");
const db = require("../config/db");
const Post = require("./Post");
const Comment = require("./Comment");
const Like = require("./Like");
const Follow = require("./Follow");
const Followers = require("./Followers");
const Followings = require("./Followings");

const UserM = db.define("userM", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

UserM.hasMany(Post, { foreignKey: "userId" });

module.exports = UserM;
