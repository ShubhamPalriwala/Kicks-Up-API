const express=require('express')
const router=new express.Router()
const Product=require('../models/productModel')
const devAuth=require('../middleware/devAuth')
const {newProduct,findProduct,findProductbyID,updateProduct,deleteProduct}=require('../controllers/productControl')

router.post('/create',devAuth,newProduct)
router.get('/',findProduct)
router.get('/:id',findProductbyID)
router.patch('/:id/update',devAuth,updateProduct)
router.delete('/:id',devAuth,deleteProduct)

module.exports=router
