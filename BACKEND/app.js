const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));


mongoose.connect("mongodb://localhost:27017/event_management", ({
})).then(()=>{
    console.log("mongodb connected");
}).catch((e)=>{
    console.log("not connected",e);
});

const eventRoutes = require('./routes/events.js');
const authRoutes = require('./routes/auths.js');
app.use('/api/events', eventRoutes);
app.use('/api/user', authRoutes);


app.listen(PORT,()=>{
    console.log(`port connected ${PORT}`);
});