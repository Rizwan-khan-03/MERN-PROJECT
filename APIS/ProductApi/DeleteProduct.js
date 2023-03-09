
const Product = require('../../db/Product')
module.exports =  async (req, res) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    res.send({ payload: result, message: "Product Delete", responseCode: 200 })
}