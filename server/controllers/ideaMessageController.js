const {IdeaMessage} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')
// Створення
class IdeaMessageController{
    async create(req,res,next){
        try{
            const {text,creatorId,ideaId} = req.body

            const ideaMessage = await IdeaMessage.create({text,creatorId,ideaId})

            return res.json(ideaMessage)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        const {ideaId} = req.params
        let ideaMessage
        ideaMessage = await IdeaMessage.findAll({
            where:{ideaId}
        })
        return res.json(ideaMessage)

    }
}
module.exports = new IdeaMessageController()