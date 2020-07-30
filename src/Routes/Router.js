const { Router } = require('express')

const UserController = require('../Controllers/UserController')
const SessionController = require('../Controllers/SessionController')
const ProductController = require('../Controllers/ProductController')

const routes = Router()

routes.post('/user', UserController.create)
routes.get('/user', UserController.index)
routes.delete('/user/:user_id', UserController.delete)

routes.post('/:user_id/product', ProductController.create)
routes.delete('/:user_id/product/:product_id', ProductController.delete)
routes.get('/product', ProductController.indexAll)
routes.get('/product/:user_id', ProductController.indexByUser)

routes.post('/session', SessionController.create)

module.exports = routes