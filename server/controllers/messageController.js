const {Message} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')
// Створення
class MessageController{
    async create(req,res,next){
        try{
            const {text,creatorWorkerId,getWorkerId} = req.body

            const message = await Message.create({text,creatorWorkerId,getWorkerId})

            return res.json(message)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        const {getWorkerId} = req.params
        let message
        message = await Message.findAll({
            where:{getWorkerId}
        })
        return res.json(message)

    }
}
module.exports = new MessageController()