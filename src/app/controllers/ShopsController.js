const Shops = require("../models/Shops");
class ShopsController {
  //[GET] /news
  index(req, res, next) {
    Shops.find()
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
  getAllOrders(req, res) {
    Shops.find()
      .then((newItem, err) => {
        const result = newItem.map((items) => items.toObject());
        res.json(result[0].orders);
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
  }

  //GET /orders/:id
  getOrder(req, res) {
    Shops.find().then((items) => {
      const api = items.map((item) => item.toObject());
      const id = req.params.id;
      console.log(api[0].orders, "orders");
      const result = api[0].orders.filter((item) => item.id == id);
      res.json(result);
    });
  }

  //[GET] /products
  getAllProducts(req, res) {
    Shops.find()
      .then((newItem, err) => {
        const result = newItem.map((items) => items.toObject());
        res.json(result[0].products);
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
  }

  //GET /products/:id
  getProduct(req, res) {
    Shops.find().then((items) => {
      const api = items.map((item) => item.toObject());
      const id = req.params.id;
      console.log(api[0].products, "products");
      const result = api[0].products.filter((item) => item.id == id);
      res.json(result);
    });
  }

  //GET /accounts
  getAllAccounts(req, res, next) {
    Shops.findOne({
      accounts: []
    })
      .then((account) => {
        console.log(account, "account");
        res.json(account);
      })
      .catch(next);
  }
}

module.exports = new ShopsController();
