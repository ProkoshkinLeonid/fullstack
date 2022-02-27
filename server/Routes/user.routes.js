const Router = require('express')

const router = new Router()
const userController = require('../Controllers/user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.post('/user/:id', userController.deleteUser)

module.exports = router