const User=require('../models/userModel')
const Product=require('../models/productModel')
const express=require('express')

const signupUser=async (req,res)=>
{
    const user=new User(req.body)
    try
    {
        await user.save()
        const token= await user.generateUID()
        res.status(201).send({user,token})
    }
    catch(error)
    {
        res.status(400).send('Unable to Create a User right now')
    }
}

const loginUser=async(req,res)=>
{
    try
    {
        const user=await User.findByCredentials(req.body.email,req.body.password)
        const token=await user.generateUID()
        res.status(200).send({user,token})
    }
    catch(e)
    {
        res.status(400).send('Unable to Login. Please Try Again')
    }
}

const logoutfromone=async (req,res)=>
{
    try
    {
        req.user.tokens=req.user.tokens.filter((token)=>
        {
            return token.token !== req.token
        })
        await req.user.save()
        res.status(200).send('You have been successfully logged out from the current session')
    }
    catch(error)
    {
        res.status(400).send('Unable to Log out, please try again')
    }
}

const logoutfromall=async (req,res)=>
{
    try
    {
        req.user.tokens=[]
        await req.user.save()
        res.status(200).send('You have been successfully logged out from all the sessions')
    }
    catch(error)
    {
        res.status(500).send('Unable to Log out, Please try again')
    }
}

const readProfile=async (req,res)=>
{
    res.status(200).send(req.user)
}

const updateProfile=async (req,res)=>
{
    const updates=Object.keys(req.body)
    const allowedUpdates=['name','email','password','age']
    const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))

    if(!isValidOperation)
    {
        return res.status(406).send('Invalid operation')
    }
    try
    {
        updates.forEach((update) => req.user[update]=req.body[update])
        await req.user.save()
        res.status(202).send(req.user)
    }
    catch(error)
    {
        res.status(500).send('Unable to update your details right now')
    }
}

const deleteProfile=async (req,res)=>
{
    try
    {
        await req.user.remove()
        res.status(200).send(req.user)
    }
    catch(error)
    {
        res.status(500).send('Unable to delete your Profile right now')
    }
}

const addToCart=async (req,res)=>{
    try{
        req.user.mycart.push(req.body)
        await req.user.save()
        res.status(201).send(req.user.mycart)
    }catch(error){
        res.status(400).send('Unable to add product to cart right now')
    }
}

const viewCart=async(req,res)=>{
    try
    {
        if(req.user.mycart)
        {
            const prod=[]
            var cartValue=0
            for (var i = 0; i <req.user.mycart.length; i++)
            {
                const thisProduct=await Product.find({id:req.user.mycart[i].productid})
                prod.push(await thisProduct)
                cartValue+=(thisProduct[0].price)
            }
            res.status(200).send({prod,cartValue})
        }
        else
        {
            res.status(204).send('Your cart is empty')
        }
    }
    catch (err)
    {
        res.status(400).send('Unable to fetch your cart right now')
    }
}

const deleteFromCart=async(req,res)=>{
    try
    {
        for (var i = 0; i < req.user.mycart.length-1; i++)
        {
            if(req.body.productid===req.user.mycart[i].productid)
            {
                req.user.mycart.splice(i,1)
            }
        }
        await req.user.save()
        res.send(req.user.mycart)
    }
    catch(error)
    {
        res.status(400).send('Unable to remove product right now')
    }
}

const deleteAllCart=async(req,res)=>{
    try
    {
        for (var i = 0; i < req.user.mycart.length; i++)
        {
            req.user.mycart.splice(i)
        }
        await req.user.save()
        res.send(req.user.mycart)
    }
    catch(error)
    {
        res.status(400).send('Unable to CLear your cart right now')
    }
}

module.exports={
    signupUser,loginUser,logoutfromone,logoutfromall,readProfile,updateProfile,deleteProfile,addToCart,viewCart,deleteFromCart,deleteAllCart
}
