// import model
const { Op } = require('sequelize');
const {UserModel} = require('../model');
const { createToken } = require('../config/encript');



module.exports={
    getDataUser : async(req,res)=>{
        try {
            //findAll({}) == kurawal buat menambahkan filtering
            let dataUser = await UserModel.findAll();
            res.status(200).send(dataUser)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    addUser : async(req,res)=>{
        let {fullname, username, email, password, pinWallet }= req.body
        try {
            let result =await UserModel.create({fullname:fullname, username:username, email:email, password:password, pinWallet:pinWallet})
            res.status(200).send({
                success:true,
                message:'Success Register'
            })
        } catch (error) {
            res.status(500).send({
                success:false,
                message:'Input Failed'
            })
            
        }
    },

    login : async (req,res)=>{
        try {
            let loginUser = await UserModel.findAll({
                where:{
                    [Op.and]:[
                        {email:req.body.email},
                        {password:req.body.password}
                    ]
                },
                // attributes:['id','fullname','username','bio', 'email','images','status','token']
                // Select attributes where emaail = req.body and password= req.body
            })
            if(loginUser.length >0){
                let token = createToken({...loginUser[0].dataValues})
                res.status(200).send({
                    ...loginUser[0].dataValues,
                    token
                })
            }else{
                res.status(500).send({
                    status:false,
                    message:`The username you entered doesn't belong to an account. Please check your username and try again.`
                })
            }
        } catch (error) {
            console.log('ERROR QUERY SQL :', error);
            res.status(500).send(error)
        }
    },

    keepLogin : async (req,res)=>{
        try {
            let resultUser = await UserModel.findAll({
                where:{
                    id:req.dataToken.id
                },
                // attributes:['id','fullname','username','bio', 'email','images','status']
            })

            if(resultUser.length>0){
                let token = createToken({...resultUser[0].dataValues})
                res.status(200).send({
                    ...resultUser[0].dataValues,
                    token
                })
            }
        } catch (error) {
            console.log('error keep', error)
            res.status(500).send(error)
        }
    },

}


