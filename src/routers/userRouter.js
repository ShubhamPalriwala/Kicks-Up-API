const express=require('express')
const router=new express.Router()
const userAuth=require('../middleware/userAuth')
const Product=require('../models/productModel')
const User=require('../models/userModel')

const {signupUser,loginUser,logoutfromone,logoutfromall,readProfile,updateProfile,deleteProfile,addToCart,viewCart,signupDev}=require('../controllers/userControl')

router.post('/signup',signupUser)
router.post('/login',loginUser)
router.post('/logout',userAuth,logoutfromone)
router.post('/logoutall',userAuth,logoutfromall)
router.get('/me',userAuth,readProfile)
router.patch('/me',userAuth,updateProfile)
router.delete('/me',userAuth,deleteProfile)
router.post('/addtocart',userAuth,addToCart)
router.get('/mycart',userAuth,viewCart)


module.exports=router
