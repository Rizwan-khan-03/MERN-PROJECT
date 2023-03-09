
const Users = require('../../db/Users');
module.exports =  async (req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send({ payload: result, message: "SignUp Success", responseCode: 200 })
}