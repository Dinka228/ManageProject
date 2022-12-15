const {Idea} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')
// Створення
class IdeaController{
    async create(req,res,next){
        try{
            const {name,creatorId} = req.body

            const idea = await Idea.create({name,creatorId})

            return res.json(idea)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        let idea
        idea = await Idea.findAll()
        return res.json(idea)

    }
}
module.exports = new IdeaController()