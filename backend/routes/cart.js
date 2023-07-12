const express = require("express");
const router = express.Router();
const Controller = require ("../src/controller/Controller");

router.get("/",Controller.cartGet)
router.post("/",Controller.cart);
router.post("/qtd",Controller.cartQtd);
module.exports = router;