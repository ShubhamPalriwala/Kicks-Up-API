const Product=require('../models/product')
const express=require('express')

const newProduct=async (req,res)=>
{
  try
  {
    const product=await new Product(req.body)
    product.save()
    res.status(201).send(product)
  }
  catch(error)
  {
    res.status(500).send(error)
  }
}

const findProduct=async (req,res)=>
{
  try
  {
    const products=await Product.find({})
    res.send(products)
  }
  catch(error)
  {
    res.send('error')
  }
}

const findProductbyID=async (req,res)=>
{
  const id=req.params.id
  try
  {
    const product=await Product.findById(id)
    if(!product)
    {
      return res.send('no product')
    }
    res.send(product)
  }
  catch(error)
  {
    res.send(error)
  }
}

const updateProduct=async (req,res)=>
{
  const updates=Object.keys(req.body)
  const allowedUpdates=['price','colour']
  const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))

  if(!isValidOperation)
  {
    return res.send('Invalid operation')
  }
  try
  {
    const product=await Product.findById(req.params.id)
    updates.forEach((update) => product[update]=req.body[update])
    await product.save()

    if(!product)
    {
      res.send('product not found')
    }
    res.send(product)
  }
  catch(error)
  {
    res.send(error)
  }
}

const deleteProduct=async (req,res)=>
{
  try
  {
    const product=await Product.findByIdAndDelete(req.params.id)
    if(!product)
    {
      res.send('no such Product')
    }
    res.send(product)
  }
  catch(error)
  {
    res.send(error)
  }
}

module.exports={newProduct,findProduct,findProductbyID,updateProduct,deleteProduct}
