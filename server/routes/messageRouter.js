const Router = require('express')
const router=new Router()
const messageController = require('../controllers/messageController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',messageController.create)
router.get('/:gerWorkerId/:creatorWorkerId',messageController.getAll)

module.exports = router