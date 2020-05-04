const Product=require('../models/productModel')
const express=require('express')

const newProduct=async (req,res)=>
{
    try
    {
        const product=await new Product(req.body)
        if(!product)
        {
            res.status(406).send('Unable be added. Missing key values')
        }
        product.save()
        res.status(201).send(product)
    }
    catch(error)
    {
        res.status(400).send('Unable to create a product right now')
    }
}

const findProduct=async (req,res)=>
{
    try
    {
        const brand=req.query.brand
        const colour=req.query.colour
        const gender=req.query.gender
        const sortBy=req.query.sortBy


        if(brand&&colour&&gender)
        {
            const products=await Product.find({brand:brand,colour:colour,gender:gender}).sort(sortBy)
            if(!products.length)
            {
                res.status(404).send('No such product available')
            }
            else
            {
                res.status(200).send(products)
            }
        }
        else if(brand&&colour)
        {
            const products=await Product.find({brand,colour}).sort(sortBy)
            if(!products.length)
            {
                res.status(404).send('No such product available')
            }
            else
            {
                res.status(200).send(products)
            }
        }
        else if(brand&&gender)
        {
            const products=await Product.find({brand,gender}).sort(sortBy)
            if(!products.length)
            {
                res.status(404).send('No such product available')
            }
            else
            {
                res.status(200).send(products)
            }
        }
        else if(gender&&colour)
        {
            const products=await Product.find({gender,colour}).sort(sortBy)
            if(!products.length)
            {
                res.status(404).send('No such product available')
            }
            else
            {
                res.status(200).send(products)
            }
        }
        else if(gender)
        {
            const products=await Product.find({gender}).sort(sortBy)
            if(!products.length)
            {
                res.status(404).send('No such product available')
            }
            else
            {
                res.status(200).send(products)
            }
        }
        else if(colour)
        {
            const products=await Product.find({colour}).sort(sortBy)
            if(!products.length)
            {
                res.status(404).send('No such product available')
            }
            else
            {
                res.status(200).send(products)
            }
        }
        else if(brand)
        {
            const products=await Product.find({brand}).sort(sortBy)
            if(!products.length)
            {
                res.status(404).send('No such product available')
            }
            else
            {
                res.status(200).send(products)
            }
        }
        else
        {
            const products=await Product.find({}).sort(sortBy)
            if(!products.length)
            {
                res.status(404).send('No such product available')
            }
            else
            {
                res.status(200).send(products)
            }
        }

    }
    catch(error)
    {
        res.status(400).send('Unable to fetch products right now')
    }
}

const findProductbyID=async (req,res)=>
{
    const id=req.params.id
    try
    {
        const product=await Product.find({id})
        if(!product.length)
        {
            return res.status(404).send('No Such Product exists')
        }
        else
        {
            return res.status(200).send(product)
        }
    }
    catch(error)
    {
        res.status(400).send('Unable to Find the product right now')
    }
}

const updateProduct=async (req,res)=>
{
    const updates=Object.keys(req.body)
    const allowedUpdates=['price','colour']
    const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))

    if(!isValidOperation)
    {
        return res.send('Invalid operation. Please only modify the accessible values')
    }
    try
    {
        const id=req.params.id
        const product=await Product.findOne({id})
        updates.forEach((update) => product[update]=req.body[update])
        await product.save()

        if(!product)
        {
            res.status(404).send('Product not Found')
        }
        res.status(200).send(product)
    }
    catch(error)
    {
        res.status(400).send('Unable to update Product right now')
    }
}

const deleteProduct=async (req,res)=>
{
    try
    {
        const product=await Product.findByIdAndDelete(req.params.id)
        if(!product)
        {
            res.status(404).send('No such Product found')
        }
        res.status(200).send(product)
    }
    catch(error)
    {
        res.status(400).send('Unable to delete Product right now')
    }
}

module.exports={
    newProduct,findProduct,findProductbyID,updateProduct,deleteProduct
}
