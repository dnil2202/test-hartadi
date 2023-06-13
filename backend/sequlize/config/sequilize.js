// Config Sequilize

const {Sequelize} = require('sequelize')

// Config koneksi database
const dbSeq = new Sequelize(
    'e-trade', 'daniel','222!99!jbl',{
        host:'localhost',
        dialect:'mysql'
    }
);

// Cek Koneksi
const checkSeq = async()=>{
    try {
        await dbSeq.authenticate();
        console.log(`connect success`)
    } catch (error) {
        console.log(error)
        
    }
}

module.exports={
    dbSeq,checkSeq
}