const Router = require('express')
const router=new Router()
const projectRouter = require('./projectRouter')
const ideaRouter = require('./ideaRouter')
const taskRouter = require('./taskRouter')
const ideaMessageRouter = require('./ideaMessageRouter')
const userRouter = require('./userRouter')
const messageRouter = require('./messageRouter')


router.use('/user',userRouter)
router.use('/project',projectRouter)
router.use('/idea',ideaRouter)
router.use('/task',taskRouter)
router.use('/ideaMessage',ideaMessageRouter)
router.use('/message',messageRouter)

module.exports = router