const Products = require("../models/Products");
class ProductsController {
  //[GET] /news
  index(req, res, next) {
    Products.find()
      .then((nuxtApi) => {
        //Biến đổi object mongooes tạo ra (nuxtApi) thành object có thể thao tác được bình thường
        nuxtApi = nuxtApi.map((nuxtApi) => nuxtApi.toObject());
        res.render("products", { nuxtApi });
      })
      .catch(
        next
        // () => {
        //   res.status(400).json({ error: "ERROR!!!" });
        // }
      );
    // res.render("news");
  }
  //[GET] /products/create
  create(req, res, next) {
    Products.find()
      .then((nuxtApi) => {
        res.render("create");
      })
      .catch(next);
  }

  //[GET] /products/:id/edit
  edit(req, res, next) {
    Products.findById(req.params.id)
      .then((nuxtApi) => {
        nuxtApi = nuxtApi.toObject();
        res.render("edit", { nuxtApi });
      })
      .catch(next);
  }
  //[PUT] /products/:id
  update(req, res, next) {
    Products.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/products"))
      .catch(next);
  }

  store(req, res, next) {
    const product = new Products(req.body);
    product.save();
    res.json(product);
  }
}

module.exports = new ProductsController();
