const { Login } = require('../db/models')

class LoginController {
    static async get(req, res){
        const data = await Login.findAll()
        res.json(data)
    }
}

module.exports = LoginController