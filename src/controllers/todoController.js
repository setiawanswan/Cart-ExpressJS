const { List} = require('../db/models')
const { Regist } = require('../db/models')

class TodoController {

    static async get(req, res){
        const data = await List.findAll()
        res.json(data)
    }

    static async create(req, res){
        const data = await List.create(req.body)
        res.json(data)
    }

    static async update(req, res){
        const data = await List.update(req.body, {
            where : {
                id : req.params["id"]
            }
        })
        // console.log(data)
        res.json(data)
    }

    static async delete(req, res){
        const data = await List.destroy({
            where : {
                id : req.params["id"]
            }
        })
        // console.log(data);
        res.json(data)
    }

}

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
module.exports = TodoController;