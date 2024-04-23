const Product = require("../models/Product")
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();


//create
router.post("/", verifyTokenAdmin, async (req, res)=>{
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

//update
router.put("/:id", verifyTokenAuthorization, async (req,res)=> {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true}
    );
    res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

//delete
router.delete("/:id", verifyTokenAdmin, async (req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get product
router.get("/find/:id", async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get all products
router.get("/", async (req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    
    try{
        let products;

        if(qNew){
            products = await Product.find().sort({_id: -1}).limit(1);
        }else if(qCategory){
            products = await Product.find({
                category: {
                    $in: [qCategory],
                }})
        }else{
            products = await Product.find();
        }
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;