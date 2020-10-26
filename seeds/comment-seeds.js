const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "This post is amazing!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This is a super interesting post",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "This post was a waste of time",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
