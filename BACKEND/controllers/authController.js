const User = require('../models/auth.js');
const jwt = require('jsonwebtoken');
const secretkey = "hhdvc616dvsdc2s6c";

exports.register = async(req, res) =>{
    const { name, email, number, password } = req.body;
    try{
        const newUser = new User({ name, email, number, password })
        await newUser.save();
        res.json(newUser);
    }catch(error){
        res.status(500).json({message: "Server Error"});
    }
};

exports.login = async(req, res)=>{
    try{
        const { email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid Creadentials"});
        }
        
        const token = jwt.sign({id: user._id}, secretkey, {expiresIn: "1hr"});
        res.status(200).json({token, user:{id:user._id, email:user.email}});
    }catch(error){
        res.status(500).json({message:"Server Error"});
    }
};