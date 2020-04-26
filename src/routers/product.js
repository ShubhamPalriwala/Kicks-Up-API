const express=require('express')
const router=new express.Router()
const Product=require('../models/product')
const {newProduct,findProduct,findProductbyID,updateProduct,deleteProduct}=require('../controllers/product')

router.post('/',newProduct)
router.get('/',findProduct)
router.get('/:id',findProductbyID)
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router
