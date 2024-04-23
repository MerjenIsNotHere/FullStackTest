const Order = require("../models/Order");
const { route } = require("./user");
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();


//create
router.post("/", verifyToken, async (req, res)=>{
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

//update
router.put("/:id", verifyTokenAdmin, async (req,res)=> {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true}
    );
    res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

//delete
router.delete("/:id", verifyTokenAdmin, async (req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get user order
router.get("/find/:userId", async (req, res)=>{
    try{
        const orders = await Order.find({usernameId: req.params.userId})
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get all
router.get("/", verifyTokenAdmin, async (req, res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;