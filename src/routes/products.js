const express = require("express");
const router = express.Router();

const productsController = require("../app/controllers/ProductsController");

router.get("/create", productsController.create);
router.get("/:id/edit", productsController.edit);
router.delete("/:id", productsController.delete);
router.put("/:id/", productsController.update);
router.post("/store", productsController.store);
router.get("/", productsController.index);

module.exports = router;
