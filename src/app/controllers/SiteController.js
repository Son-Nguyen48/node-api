const Article = require("../models/Articles");
class SiteController {
  //[GET] /
  index(req, res) {
    Article.find()
      .then((Articles, err) => {
        console.log(Articles, "Articles");
        res.render("home");
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
    // res.render("home");
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
