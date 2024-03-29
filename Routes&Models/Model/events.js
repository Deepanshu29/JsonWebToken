const mongoose = require('mongoose');
const url = 'mongodb+srv://Deepanshu:Swati77#@cluster0.7m7a4.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('connected',()=>{
    console.log('connected');
});

const eventSchema = new mongoose.Schema({
    EventDate: Date,
    EventName: String,
    EventDesc: String
});

const eventModel = mongoose.model('events',eventSchema);

module.exports = eventModel;
