const Router = require('express')
const router=new Router()
const ideaController = require('../controllers/ideaController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',ideaController.create)
router.get('/',ideaController.getAll)

module.exports = router