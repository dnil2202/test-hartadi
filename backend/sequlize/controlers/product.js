const { ProductModel } = require('../model')


module.exports={
    getDataProduct : async (req,res)=>{
        try {
            let data = await ProductModel.findAll({
                where:{
                    isDelete:false
                }
            })
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error)
        }
    },
}