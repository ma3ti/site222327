const express = require('express');
const mongoose = require('mongoose');

const portNumber = '5000';

let app = express();

const uri = "mongodb+srv://admin:ulUpCKpLJQ763Mvx@cluster0.r94j7ya.mongodb.net/?retryWrites=true&w=majority";


app.get('/', (req, res) => {
    res.send('<h1> Hello World !!! </h1>');
});


async function connect(){
    try {
        await mongoose.connect(uri);
        console.log('Connected to Db');
        
    } catch (error) {
        console.log(error);
        
    }
}


connect();


app.listen(portNumber, () => {
    global.startDate = new Date() ; 
	console.log(`App listening on port ${portNumber} started ${global.startDate.toLocaleString()}`);
})
