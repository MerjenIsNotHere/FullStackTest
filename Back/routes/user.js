const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User");



//update
router.put("/:id", verifyTokenAuthorization, async (req,res)=> {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
        req.body.password, 
        process.env.PASS_SEC
        ).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true}
    );
    res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
})

//delete
router.delete("/:id", verifyTokenAuthorization, async (req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get user
router.get("/find/:id", verifyTokenAdmin, async (req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {password, ...others}=user._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get all users
router.get("/", verifyTokenAdmin, async (req, res)=>{
    const query = req.query.new
    try{
        const users = query ? await User.find().sort({_id: -1}).limit(5):await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;