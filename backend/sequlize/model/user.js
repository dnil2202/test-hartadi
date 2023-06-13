const {Sequelize} = require('sequelize')
const {dbSeq} = require('../config/sequilize')

const {DataTypes} = Sequelize;

const UserModel = dbSeq.define('user',{
    // set up colom
    fullname:{
        type:DataTypes.STRING
    },
    username:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    pinWallet:{
        type:DataTypes.INTEGER
    }
},
{
    freezeTableName: true
}
)

module.exports={UserModel}