exports.userSignupValidator = (req, res, next) => {
	req.check("FirstName", "first Name is required").notEmpty()
	req.check("LastName", "Last Name is required").notEmpty()
	req.check("Email", "Email must be between 3 to 32 characters")
		.matches(/.+\@.+\..+/)
		.withMessage("Email must contain @")
		.isLength({
			min: 4,
			max: 32,
		})
	req.check("Password", "Password is required").notEmpty()
	// req.check("password").isLength({ min: 6 }).withMessage("Password must contain at least 6 characters").matches(/\d/).withMessage("Password must contain a number")

	const errors = req.validationErrors()
	if (errors) {
		const firstError = errors.map((error) => error.msg)[0]
		return res.status(400).json({ error: firstError })
	}
	next()
}
