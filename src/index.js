const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3001;
const route = require("./routes");
const db = require("./config/db");

// connect db

db.connect();

app.use(express.static(__dirname + "/public"));

app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Route init
route(app);

app.listen(port, () => {
  console.log(`Server is running ... on port ${port}`);
});
