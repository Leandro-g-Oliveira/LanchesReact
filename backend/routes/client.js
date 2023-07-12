const express = require("express");
const router = express.Router();
const Controller = require ("../src/controller/Controller");

router.get("/product/:id",Controller.snackById);
router.post("/login",Controller.loginCli)
module.exports = router;