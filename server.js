const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
// //import the handlebars helper functions
const helpers = require("./utils/helpers");
// //setup Handlebars.js as the template engine

const exphbs = require("express-handlebars");
const hbs = exphbs.create({helpers}); //helpers

//allows us to use express-session and then link to sequelize store (for cookies)
// session connection to sequelize database
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

// creating sess obj (short for session) to save our session token into
const sess = {
  secret: "Super secret secret",
  //set and age limit to the cookies, so they expire after a time
  cookie: { maxAge: 36000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//Middleware
//sets up an Express.js session and connects the session to our Sequelize database
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//connect the css file
app.use(express.static(path.join(__dirname, "public")));

// set Handlebars as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
