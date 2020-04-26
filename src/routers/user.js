const express=require('express')
const router=new express.Router()
const User=require('../models/user')
const auth=require('../middleware/auth')
const {signupUser,loginUser,logoutfromone,logoutfromall,readProfile,updateProfile,deleteProfile}=require('../controllers/user')

router.post('/signup',signupUser)
router.post('/login',loginUser)
router.post('/logout',auth,logoutfromone)
router.post('/logoutall',auth,logoutfromall)
router.get('/me',auth,readProfile)
router.patch('/me',auth,updateProfile)
router.delete('/me',auth,deleteProfile)

module.exports=router
