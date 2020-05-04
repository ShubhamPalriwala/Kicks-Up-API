const express=require('express')
require('./db/mongoose.js')
const User=require('./models/userModel')
const Product=require('./models/productModel')
const userRouter=require('./routers/userRouter')
const productRouter=require('./routers/productRouter')

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())
app.use('/users',userRouter)
app.use('/products',productRouter)

app.get('*',(req,res)=>{
    res.status(404).send('Page not Found')
})

app.listen(port,()=>
{
    console.log('App is running on Port ',+port)
})
