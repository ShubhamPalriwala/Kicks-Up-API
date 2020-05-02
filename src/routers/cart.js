const express=require('express')
const router=new express.Router()
const auth=require('../middleware/auth')
const Product=require('../models/product')
const User=require('../models/user')

router.post('/addtocart',auth,async (req,res)=>{
  try{
    req.user.mycart=req.body
    await req.user.save()
    res.status(201).send(req.user.mycart)
  }catch(error){
    res.status(400).send(error)
  }
})

router.get('/mycart',auth,async(req,res)=>{
  try
  {
    if(req.user.mycart)
    {
      for (var i = 0; i < req.user.mycart.length; i++)
      {
        const prod=await Product.findOne({id:req.user.mycart[0].productid})
        res.status(200).send(prod)
      }
    }
    else
    {
      res.status(204).send('Your cart is empty')
    }
  }
  catch (err)
  {
    res.status(400).send(err)
  }
}
)

module.exports=router
