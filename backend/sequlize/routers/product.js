const express = require('express')
const { productController } = require('../controlers')
const route = express.Router()

route.get('/',productController.getDataProduct)

module.exports=route