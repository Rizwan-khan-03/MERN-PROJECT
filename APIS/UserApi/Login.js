const Users = require('../../db/Users');
module.exports= async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await Users.findOne(req.body).select("-password");
        if (user) {
            res.send({ payload: user, message: "Login Success", responseCode: 200 })
        } else {
            res.send({ payload: {}, message: "No Data Found", responseCode: 400 })
        }
    } else {
        res.send({ payload: {}, message: "No Data Found", responseCode: 400 })
    }
}