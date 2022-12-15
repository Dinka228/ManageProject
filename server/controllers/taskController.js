const {Task} = require("../models/models");

class TaskController{
    async create(req,res){
        const {name,curatorId,projectId,answer,progress,priority,date} = req.body
        const task = await Task.create({name,curatorId,projectId,answer,progress,priority,date})

        return res.json(task)
    }
    async getAll(req,res){
        const {projectId} = req.params
        const task = await Task.findAll({
            where:{projectId}
        })
        return res.json(task)
    }
}
module.exports = new TaskController()