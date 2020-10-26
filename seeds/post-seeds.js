const { Post } = require("../models");

const postData = [
  {
    title: "Test Blog 1",
    content: "I need to test the 1st blog",
    user_id: 1,
  },
  {
    title: "Test Blog 2",
    content: "We are going to test the 2nd one too",
    user_id: 2,
  },
  {
    title: "Test Blog 3",
    content: "I guess we'll test the 3rd one as well",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
