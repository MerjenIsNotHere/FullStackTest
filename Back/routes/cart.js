const Cart = require("../models/Cart");
const { route } = require("./user");
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();


//create
router.post("/", verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

//update
router.put("/:id", verifyTokenAuthorization, async (req,res)=> {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true}
    );
    res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

//delete
router.delete("/:id", verifyTokenAuthorization, async (req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get user cart
router.get("/find/:userId", async (req, res)=>{
    try{
        const cart = await Cart.findOne({usernameId: req.params.userId})
        res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get all
router.get("/", verifyTokenAdmin, async (req, res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;