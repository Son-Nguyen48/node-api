const NuxtShops = require("../models/NuxtShops");
class NuxtShopController {
  //[GET] /news
  index(req, res, next) {
    NuxtShops.find()
      .then((nuxtApi) => res.json(nuxtApi))
      .catch(
        next
        // () => {
        //   res.status(400).json({ error: "ERROR!!!" });
        // }
      );
    // res.render("news");
  }

  //[GET] /orders
  showOrders(req, res) {
    NuxtShops.find()
      .then((newItem, err) => {
        const result = newItem.map((items) => items.toObject());
        res.json(result[1].orders);
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
  }
}

module.exports = new NuxtShopController();
