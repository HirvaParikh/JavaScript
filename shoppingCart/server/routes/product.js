const express = require("express")
const router = express.Router()

const { getProduct } = require("../controllers/product")

router.get("/product", getProduct)

module.exports = router
