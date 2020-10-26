//importing the user model
const User = require("./User");
//importing the post model
const Post = require("./Post");
//importing the Comments model
const Comment = require("./Comment");

// create associations
//corresponding foreign key which is the user_id in the post model
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

//creating the model associations for Comments
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

//exporting and object with User, Post, Vote, Comment as properties
module.exports = { User, Post, Comment };
