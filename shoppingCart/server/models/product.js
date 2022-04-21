const mongoose = require("mongoose")
// const crypto = require("crypto")
// const { v1: uuidv1 } = require("uuid")

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			required: true,
			maxLength: 32,
		},
		price: {
			type: String,
			trim: true,
			required: true,
			maxLength: 32,
		},
		description: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		rating: {
			rate: {
				type: String,
			},
			count: {
				type: Number,
			},
		},
		image: {
			type: String,
			default: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		},
		isAdded:{
			type :Boolean,
		}
	},
	{ timestamps: true }
)

//virtual field

// userSchema
// 	.virtual("Password")
// 	.set(function (password) {
// 		this._password = password
// 		this.salt = uuidv1()
// 		this.hashed_password = this.encryptPassword(password)
// 	})
// 	.get(function () {
// 		return this._password
// 	})

// userSchema.methods = {
// 	authenticate: function (plainText) {
// 		return this.encryptPassword(plainText) === this.hashed_password
// 	},

// 	encryptPassword: function (password) {
// 		if (!password) return ""
// 		try {
// 			return crypto.createHmac("sha1", this.salt).update(password).digest("hex")
// 		} catch (err) {
// 			return ""
// 		}
// 	},
// }

module.exports = mongoose.model("Product", productSchema)
