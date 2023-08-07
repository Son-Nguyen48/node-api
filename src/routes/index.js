const searchRouter = require("./search");
const newsRouter = require("./news");
const nuxtShopRouter = require("./nuxtShop");
const shopRouter = require("./shops");
const siteRouter = require("./site");

function route(app) {
  // app.get("/", (req, res) => {
  //   res.render("home");
  // });

  //   app.get("/search", (req, res) => {
  //     res.render("search");
  //   });

  app.use("/search", searchRouter);
  app.use("/news", newsRouter);
  app.use("/nuxtShops", nuxtShopRouter);
  app.use("/shops", shopRouter);
  app.use("/", siteRouter);

  // app.post("/search", (req, res) => {
  //   console.log(req.body, "body");
  //   res.render("search");
  // });
}

module.exports = route;
