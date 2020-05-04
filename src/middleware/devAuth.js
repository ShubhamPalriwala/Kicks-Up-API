const express=require('express')


const devAuth=async(req,res,next)=>
{
    try{
        const token=req.header('Dev_Auth')
        if(token===process.env.SUPER_USER){
            next()
        }
        else{
            res.status(403).send('Unauthorised !')
        }
    } catch(err){
        res.status(400).send('Unable to Access, Please try again later')
    }
}

module.exports=devAuth
