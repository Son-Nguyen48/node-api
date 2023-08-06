const NuxtShops = require("../models/NuxtShops");
class NuxtShopController {
  //[GET] /news
  index(req, res) {
    NuxtShops.find()
      .then((newItem, err) => {
        console.log(newItem, "newItem");
        res.json(newItem);
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
    // res.render("news");
  }

  //[GET] /orders
  showOrders(req, res) {
    NuxtShops.find()
      .then((newItem, err) => {
        console.log(newItem[1], "orders");
        res.json(newItem[1]);
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
  }
}

module.exports = new NuxtShopController();
