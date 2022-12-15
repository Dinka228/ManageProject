const Router = require('express')
const router=new Router()
const ideaMessageController = require('../controllers/ideaMessageController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',ideaMessageController.create)
router.get('/:ideaId',ideaMessageController.getAll)

module.exports = router