const express=require('express')
require('./db/mongoose.js')
const User=require('./models/user')
const Product=require('./models/product')

const userRouter=require('./routers/user')
const productRouter=require('./routers/product')

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(productRouter)


app.listen(port,()=>{
  console.log('App is running on Port ',+port)
})
