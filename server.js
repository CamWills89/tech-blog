const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
//import the handlebars helper functions
const helpers = require("./utils/helpers");

//setup Handlebars.js as the template engine
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;
//allows us to use express-session and then link to sequelize store (for cookies)
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//creating sess obj to save our session token into
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//connect the css file
app.use(express.static(path.join(__dirname, "public")));

app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
