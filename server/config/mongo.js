const mongoose = require('mongoose');
require('dotenv').config();


const mongoUrl = process.env.MONGO_URL;

//  MongoDB connection
mongoose.connect(mongoUrl);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

module.exports = database;