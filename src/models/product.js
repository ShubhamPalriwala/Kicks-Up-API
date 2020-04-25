const mongoose=require('mongoose')
const validator=require('validator')

const productSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  id:{
    type:Number,
    required:true
  },
  brand:{
    type:String,
    required:true,
    trim:true
  },
  price:{
    type:Number,
    required:true
  },
  gender:{
    type:String,
  },
  colour:{
    type:String
  }
},{
  timestamps:true
})

const Product=mongoose.model('Product',productSchema)

module.exports=Product
