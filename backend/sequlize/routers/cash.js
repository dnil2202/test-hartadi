const express =require('express')
const { cashController }= require('../controlers')
const {readToken}=require('../config/encript')
const route = express.Router()

route.post('/',readToken,cashController.getDataCash)
route.get('/',readToken,cashController.keepDataCash)
route.post('/buy',cashController.updateCash)

module.exports=route