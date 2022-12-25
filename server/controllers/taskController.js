const {User} = require("../models/models");
const {Task} = require("../models/models");

class TaskController{
    async create(req,res){
        const {name,curatorId,projectId,answer,progress,priority,date} = req.body
        const task = await Task.create({name,curatorId,projectId,answer,progress,priority,date})
        const user = await User.findOne({where:{id:curatorId}})
        const updateCountTask = +user.countTask + 1
        await User.update({countTask:updateCountTask},{where:{id:user.id}})
        return res.json(task)
    }
    async getAll(req,res){
        const {projectId} = req.params
        const task = await Task.findAll({
            where:{projectId}
        })
        return res.json(task)
    }
    async getUserTask(req,res){
        const {curatorId} = req.params
        const task = await Task.findAll({
            where:{curatorId}
        })
        return res.json(task)
    }
    async getFinishTask(req,res){
        const {id,projectId} = req.params
        const task = await Task.findOne({
            where:{id}
        })
        await Task.update({progress:"Finished"},{where:{id:task.id}})
        const updateTask = await Task.findAll({
            where:{projectId}
        })
        return res.json(updateTask)
    }
    async finishTask(req,res){
        const {id,curatorId} = req.params
        const task = await Task.findOne({
            where:{id}
        })
        await Task.update({progress:"Finished"},{where:{id:task.id}})
        const updateTask = await Task.findAll({
            where:{curatorId}
        })
        return res.json(updateTask)
    }
    async update(req,res){
        const {taskId,curatorId,answer} = req.body
        await Task.update({curatorId:curatorId,answer:answer},{where:{id:taskId}})
        const updateCountTask = await User.findOne({where:{id:taskId}})

        return res.json(updateCountTask)
    }
}
module.exports = new TaskController()