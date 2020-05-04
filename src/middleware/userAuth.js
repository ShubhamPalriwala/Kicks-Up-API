const express=require('express')
const jwt=require('jsonwebtoken')
const User=require('../models/userModel')

const userAuth=async(req,res,next)=>
{
    try
    {
        const token=req.header('Authorization').replace('Bearer ','')
        const decoded=jwt.verify(token,process.env.USERTOKEN)
        const user=await User.findOne({_id:decoded.id, 'tokens.token':token})
        if(!user)
        {
            return res.status(404).send('No such user exists')
        }
        req.token=token
        req.user=user
        next()

    }
    catch(error)
    {
        res.status(400).send('Please Authenticate')
    }
}

module.exports=userAuth
