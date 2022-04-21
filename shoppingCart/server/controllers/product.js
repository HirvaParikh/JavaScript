const Product = require("../models/product")
// exports.user = async (req, res) => {
// 	try {
// 		res.status(200).json("kara na kya chate ho..!")
// 	} catch (err) {
// 		console.error(err.message)
// 	}
// }
exports.getProduct = (req, res) => {
    try{
        Product.find({},(err,product) => {
            if(err){
                return res.status(400).json({message : err})
            }
            return res.status(200).json({product})
        })
    }
    catch(err){
        return err
    }
}