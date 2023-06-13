const { Sequelize } = require('sequelize');
const { dbSeq } = require('../config/sequilize');

const { DataTypes } = Sequelize;

const CashModel = dbSeq.define('cash',{
    value:{
        type:DataTypes.STRING
    },
    amount:{
        type:DataTypes.INTEGER
    },
    userId:{
        type:DataTypes.INTEGER
    },
},
{
    freezeTableName:true,
    timestamps:true,
    createdAt: false,
    updatedAt: false
}
)

module.exports={ CashModel }