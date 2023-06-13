const express = require('express')
const {dbSeq,checkSeq } = require('./config/sequilize')
const cors = require('cors')
const bearerToken = require('express-bearer-token')

const PORT = 4000
const app = express()


app.use(express.json())
app.use(cors())
app.use(bearerToken())
checkSeq()

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Database Sequlize</h1>')
})

// Config Router
const { userRouter, cashRouter, productRouter } = require('./routers')
app.use('/users', userRouter)
app.use('/cash', cashRouter)
app.use('/product', productRouter)


dbSeq.sync().then(()=>{
    app.listen(PORT,()=>console.log(`Running API on ${PORT}`))
})
