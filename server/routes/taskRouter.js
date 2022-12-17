const Router = require('express')
const router=new Router()
const taskController = require('../controllers/taskController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',taskController.create)
router.get('/:projectId',taskController.getAll)
router.get('/:curatorId',taskController.getUserTask)
router.post('/:id/:projectId',taskController.getFinishTask)
router.post('/:id/:curatorId',taskController.finishTask)

module.exports = router