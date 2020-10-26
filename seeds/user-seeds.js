const { User } = require("../models");

const userData = [
  {
    username: "Cameron",
    password: "test1",
  },
  {
    username: "Dani",
    password: "test2",
  },
  {
    username: "Cora",
    password: "test3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
