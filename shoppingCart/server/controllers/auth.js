const User = require("../models/user")
const jwt = require("jsonwebtoken") // to generate signed token
const expressJwt = require("express-jwt") // for authorization check
const { errorHandler } = require("../helpers/dbErrorHandler")

exports.signup = async (req, res) => {
	try {
		const user = await new User(req.body)

		await user.save((err, user) => {
			if (err) {
				return res.status(400).json({ err })
			}
			res.status(200).json({ user })
		})
	} catch (err) {
		console.error(err.message)
	}
}

exports.getAllUser = async (req, res) => {
	try {
		User.find({}, (err, users) => {
			if (err) {
				return err
			}
			return res.status(200).json({ users })
		})
	} catch (error) {
		return error
	}
}

exports.signin = (req, res) => {
	// find the user based on email
	try {
		const { Email, password } = req.body
		User.findOne({ Email }, (err, user) => {
			if (err || !user) {
				return res.status(400).json({
					error: "User with that email does not exist. Please signup",
				})
			}
			// if user is found make sure the email and Password match
			// create authenticate method in user model
			if (!user.authenticate(password)) {
				return res.status(401).json({
					error: "Email and Password dont match",
				})
			}
			// generate a signed token with user id and secret
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
			// persist the token as 't' in cookie with expiry date
			res.cookie("t", token, { expire: new Date() + 9999 })
			// return response with user and token to frontend client
			const { _id, FirstName, LastName, Email } = user
			return res.json({ _id, Email, FirstName, LastName, accessToken: token })
		})
	} catch (err) {
		console.log(err)
	}
}

exports.signout = (req, res) => {
	res.clearCookie("t")
	res.json({ message: "Signout success" })
}

exports.requireSignin = expressJwt({
	secret: process.env.JWT_SECRET,
	userProperty: "auth",
})

exports.isAuth = (req, res, next) => {
	let user = req.profile && req.auth && req.profile._id == req.auth._id
	if (!user) {
		return res.status(403).json({
			error: "Access denied",
		})
	}
	next()
}
