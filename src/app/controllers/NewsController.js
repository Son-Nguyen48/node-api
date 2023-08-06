const News = require("../models/News");
class NewController {
  //[GET] /news
  index(req, res) {
    News.find()
      .then((newItem, err) => {
        console.log(newItem, "newItem");
        res.json(newItem);
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
    // res.render("news");
  }

  //[GET] /news detail
  show(req, res) {
    // res.send("news detail");
    News.find()
      .then((newItem, err) => {
        console.log(newItem[0].name, "newItem");
        res.json(newItem[0].name);
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
  }
}

module.exports = new NewController();
