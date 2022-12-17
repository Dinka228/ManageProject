const {Message} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Op } = require("sequelize");
const path = require('path')
const uuid = require('uuid')
// Створення
class MessageController{
    async create(req,res,next){
        try{
            const {text,creatorWorkerId,gerWorkerId} = req.body

            const message = await Message.create({text,creatorWorkerId,gerWorkerId})

            return res.json(message)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        const {gerWorkerId,creatorWorkerId} = req.params
        let message
        message = await Message.findAll({
            where: {
                [Op.and]: [{[Op.or]:[{
                    gerWorkerId:gerWorkerId
                    },{
                    gerWorkerId: creatorWorkerId
                    }]},{[Op.or]:[{
                        creatorWorkerId:creatorWorkerId
                    },{
                        creatorWorkerId: gerWorkerId
                    }]}]
            }})
        return res.json(message)

    }
}
module.exports = new MessageController()