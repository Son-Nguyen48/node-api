const Products = require("../models/Products");
class ProductsController {
  //[GET] /news
  index(req, res, next) {
    Products.find()
      .then((nuxtApi) => res.json(nuxtApi))
      .catch(
        next
        // () => {
        //   res.status(400).json({ error: "ERROR!!!" });
        // }
      );
    // res.render("news");
  }

  create(req, res, next) {
    Products.find()
      .then((nuxtApi) => {
        res.render("create");
      })
      .catch(next);
  }

  store(req, res, next) {
    const product = new Products(req.body);
    product.save();
  }
}

module.exports = new ProductsController();
