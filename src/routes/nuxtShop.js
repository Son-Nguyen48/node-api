const express = require("express");
const router = express.Router();

const nuxtShopController = require("../app/controllers/NuxtShopController");

router.get("/orders", nuxtShopController.showOrders);
router.get("/", nuxtShopController.index);

module.exports = router;
