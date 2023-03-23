const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const PORT = '5000';
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

// express app
let app = express();

app.use(express.json());
app.use('/api', routes);

app.get('/', function (req, res) {
    res.send('<h1> Hello World !!! </h1>');
});




app.listen(PORT, () => {
    global.startDate = new Date() ; 
	console.log(`App listening on port ${PORT} started ${global.startDate.toLocaleString()}`);
})
