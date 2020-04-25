const express=require('express')
const jwt=require('jsonwebtoken')
const User=require('../models/user')

const auth=async(req,res,next)=>{
  try{
    const token=req.header('Authorization').replace('Bearer ','')
    const decoded=jwt.verify(token,'kicksup-api')
    const user=await User.findOne({_id:decoded.id, 'tokens.token':token})

    if(!user){
      throw new Error('no')
    }
    req.token=token
    req.user=user
    next()
    console.log(token)
  } catch(error){
    res.send('Please Authenticate')
  }

}

module.exports=auth
