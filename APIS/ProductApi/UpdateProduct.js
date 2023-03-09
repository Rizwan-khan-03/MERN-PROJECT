
const Product = require('../../db/Product')
module.exports =  async (req, res) => {
    let product = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
    if (product) {
        res.send({ payload: product, message: "Product Update", responseCode: 200 })
    } else {
        res.send({ payload: {}, message: "No Data Found", responseCode: 400 })
    }
}