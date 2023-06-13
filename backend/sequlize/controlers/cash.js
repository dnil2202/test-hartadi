const { where } = require('sequelize')
const { CashModel, UserModel } = require('../model')
const { Op } = require('sequelize')
const { QueryTypes } = require('sequelize');
const { dbSeq } = require('../config/sequilize')

module.exports={
    getDataCash : async(req,res)=>{
        let{pinWallet, id}= req.body
        try {
            let dataUser = await UserModel.findAll({
                where:{
                    [Op.and]:[
                        {pinWallet:pinWallet},
                        {id:req.dataToken.id}
                    ]
                }
        })
        if(dataUser){
            let dataCashUser = await dbSeq.query(`Select c.id, c.value, c.amount, c.value*c.amount as total from cash c where userId = ${dataUser[0].dataValues.id}`,{type:QueryTypes.SELECT})
            res.status(200).send({
                status:true,
                data:dataCashUser
            })
        }
        } catch (error) {
            res.status(500).send({
                success:false,
                message:'wrong pin'
            })
        }
    },

    keepDataCash : async(req,res)=>{
        try {
            let dataUser = await UserModel.findAll({
                where:{
                    [Op.and]:[
                        {pinWallet:req.dataToken.pinWallet},
                        {id:req.dataToken.id}
                    ]
                }
        })
        if(dataUser){
            let dataCashUser = await dbSeq.query(`Select c.id, c.value, c.amount, c.value*c.amount as total from cash c where userId = ${dataUser[0].dataValues.id}`,{type:QueryTypes.SELECT})
            res.status(200).send({
                status:true,
                data:dataCashUser
            })
        }
        } catch (error) {
            res.status(500).send({
                success:false,
                message:'wrong pin'
            })
        }
    },

    updateCash : async(req,res) =>{
            let data = req.body.data
        try {
           await data.forEach(element => {
                CashModel.update(
                    {amount:element.amount},
                    {where:{value:element.value}}
                )
            });
            res.status(200).send({
                success:true,
                message:'Success Buy'
            })
        } catch (error) {
            res.status(500).send({
                success:false,
                message:'Error'
            })
        }
    }
}