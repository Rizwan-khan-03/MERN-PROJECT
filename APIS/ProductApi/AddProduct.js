
const Product = require('../../db/Product')
module.exports = async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send({ payload: result, message: "Product Added", responseCode: 200 })
}