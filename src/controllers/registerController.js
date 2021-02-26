const { Regist } = require('../db/models')

class RegisterController {
    //Regist API
    static async get(req, res) {
        const data = await Regist.findAll()
        // console.log(data)
        res.json(data)
    }

    static async create(req, res){
        const data = await Regist.create(req.body)
        res.json(data)
    }

    static async delete(req, res){
        const data = await Regist.destroy({
            where : {
                id : req.params["id"]
            }
        })
        res.json(data)
    }
}

module.exports = RegisterController;