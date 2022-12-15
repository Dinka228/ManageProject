const Router = require('express')
const router=new Router()
const taskController = require('../controllers/taskController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',taskController.create)
router.get('/:projectId',taskController.getAll)

module.exports = router