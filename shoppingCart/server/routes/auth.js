const express = require("express")
const router = express.Router()

const { signup, signin, signout, requireSignin,getAllUser } = require("../controllers/auth")
const { userSignupValidator } = require("../validator")

router.post("/", userSignupValidator, signup)

// router.post("/Users", signup)

router.post("/signin", signin)

module.exports = router
