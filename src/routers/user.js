const express=require('express')
const router=new express.Router()
const User=require('../models/user')
const auth=require('../middleware/auth')


router.post('/users', async (req,res)=>{
  const user=new User(req.body)
  try{
    await user.save()
    const token= await user.generateUID()
    res.status(201).send({user,token})
  } catch (error){
    res.status(400).send('Unable to Create a User right now')
  }
})

router.post('/users/login', async(req,res)=>{
  try{
    const user=await User.findByCredentials(req.body.email,req.body.password)
    const token=await user.generateUID()
    res.status(200).send({user,token})
  } catch(e){
    res.status(400).send('Unable to Login. Please Try Again')
  }
})

router.post('/users/logout',auth,async (req,res)=>{
  try{
    req.user.tokens=req.user.tokens.filter((token)=>{
      return token.token !== req.token
    })
    await req.user.save()
    res.status(200).send('You have been successfully logged out from the current session')
  } catch(error){
    res.status(500).send('Unable to Log out, please try again')
  }
})


router.post('/users/logoutall', auth , async (req,res)=>{
  try{
    req.user.tokens=[]
    await req.user.save()
    res.status(200).send('You have been successfully logged out from all the sessions')
    } catch(error){
    res.status(500).send('Unable to Log out, Please try again')
  }
})

router.get('/users/me',auth,async (req,res)=>{
  res.status(200).send(req.user)
})

router.patch('/users/me',auth,async (req,res)=>{
  const updates=Object.keys(req.body)
  const allowedUpdates=['name','email','password','age']
  const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))

  if(!isValidOperation){
    return res.status(406).send('Invalid operation')
  }
  try{
    updates.forEach((update) => req.user[update]=req.body[update])
    await req.user.save()
    res.status(202).send(req.user)
  } catch(error){
    res.status(500).send('Unable to update your details right now')
  }
})

router.delete('/users/me',auth,async (req,res)=>{
  try{
    await req.user.remove()
    res.status(200).send(req.user)
  } catch(error){
    res.status(500).send('Unable to delete your Profile right now')
  }
})


module.exports=router
