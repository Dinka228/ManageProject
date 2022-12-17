const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    name:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"},
    telephone:{type:DataTypes.INTEGER,unique: true},
    countTask:{type:DataTypes.INTEGER,defaultValue: 0}
})
const Project = sequelize.define('project',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    curatorId:{type:DataTypes.INTEGER},
    progress:{type:DataTypes.STRING},
    customerId:{type:DataTypes.INTEGER}
})
const Task = sequelize.define('task',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    answer:{type:DataTypes.STRING},
    priority:{type:DataTypes.STRING},
    progress:{type:DataTypes.STRING,defaultValue:"In Progress"},
    curatorId:{type:DataTypes.INTEGER},
    date:{type:DataTypes.STRING,defaultValue:Date.now()},
})
const Idea = sequelize.define('idea',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    creatorId:{type:DataTypes.INTEGER}
})
const IdeaMessage = sequelize.define('ideaMessage',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    text:{type:DataTypes.STRING},
    creatorId:{type:DataTypes.INTEGER}
})
const Message = sequelize.define('message',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    text:{type:DataTypes.STRING},
    creatorWorkerId:{type:DataTypes.INTEGER},
    gerWorkerId:{type:DataTypes.INTEGER}
})
const WorkerProject = sequelize.define('workerProject',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
})

Project.hasMany(Task)
Task.belongsTo(Project)
Idea.hasMany(IdeaMessage)
IdeaMessage.belongsTo(Idea)

User.belongsToMany(Project,{through:WorkerProject})
Project.belongsToMany(User,{through:WorkerProject})

module.exports={
    User,
    Project,
    Task,
    Idea,
    IdeaMessage,
    Message,
    WorkerProject
}