
const Product = require('../../db/Product')
module.exports =  async (req, res) => {
    let product = await Product.findOne({ _id: req.params.id });
    if (product) {
        res.send({ payload: product, message: "Product Exist", responseCode: 200 })
    } else {
        res.send({ payload: {}, message: "No Data Found", responseCode: 400 })
    }

}