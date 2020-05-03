const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    id:{
        type:String,
        maxlength:5,
        required:true,
        unique:true
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
        type:String
    },
    colour:{
        type:String
    },
    imgurl:{
        type:String
    }
},{
    timestamps:true
})

const Product=mongoose.model('Product',productSchema)

module.exports=Product
