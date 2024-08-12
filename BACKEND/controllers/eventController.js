
const Event = require("../models/event.js");

exports.createEvent = async(req, res)=>{
    const { tittle, description, date, location, ticketsAvailable } = req.body;
    try{
        const newEvent = new Event({tittle, description, date, location, ticketsAvailable });
        await newEvent.save();
        res.json(newEvent);
    }catch(err){
        res.status(500).json({message:"Server Error"});
    }
};

exports.getEvents = async(req, res)=>{
    try{
        const events = await Event.find();
        res.json(events);
    }catch(err){
        res.status(500).json({message:"Server Error"});
    }
};

exports.getEventById = async(req,res)=>{
    try{
        const event = await Event.findById(req.params.id);
        res.json(event);
    }catch(err){
        res.status(500).json({message:"Server Error"});
    }
};

exports.updateEvent = async (req, res)=>{
    try{
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new : true });
        res.json(event);
    }catch(err){
        res.status(500).json({message:"Server Error"});
    }
};

exports.deleteEvent = async (req, res)=>{
    try{
        const event = await Event.findByIdAndDelete(req.params.id);
        res.json({message:"Event Deleted"});
    }catch(err){
        res.status(500).json({message:"Server Error"});
    }
};

exports.addFeedback = async(req, res)=>{
    const { user, comment }=req.body;
    try{
        const event = await Event.findById(req.params.id);
        event.feedback.push({ user, comment });
        res.json(event);
    }catch(err){
        res.status(500).json({message:"Server Error"});
    }
};