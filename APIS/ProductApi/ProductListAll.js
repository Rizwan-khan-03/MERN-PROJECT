
const Product = require('../../db/Product')
module.exports = async (req, res) => {
    let product = await Product.find();
    if (product.length > 0) {
        res.send({ payload: product, message: "ok", responseCode: 200 })
    } else {
        res.send({ payload: {}, message: "No Data Found", responseCode: 400 })
    }
}