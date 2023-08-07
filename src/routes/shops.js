const express = require("express");
const router = express.Router();

const shopsController = require("../app/controllers/ShopsController");

router.get("/orders", shopsController.getAllOrders);
router.get("/orders/:id", shopsController.getOrder);
router.get("/products", shopsController.getAllProducts);
router.get("/products/:id", shopsController.getProduct);
router.get("/accounts", shopsController.getAllAccounts);
router.get("/", shopsController.index);

module.exports = router;
