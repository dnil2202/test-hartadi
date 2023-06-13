const express =require('express')
const { userController }= require('../controlers')
const {readToken}=require('../config/encript')
const route = express.Router()

route.get('/',userController.getDataUser)
route.post('/',userController.addUser)
route.post('/login',userController.login)
route.get('/keep',readToken,userController.keepLogin)

module.exports=route