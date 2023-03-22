const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const PORT = '5000';


let app = express();




/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '.../.../src/public/views/homepage.html');
});*/

 
app.get('/', function (req, res) {
    res.send('<h1> Hello World !!! </h1>');
});



//  MongoDb Connection
/*
async function connect(){
    try {
        await mongoose.connect(uri);
        console.log('Connected to Db');
        
    } catch (error) {
        console.log(error);
    }
}

connect();
*/

app.listen(PORT, () => {
    global.startDate = new Date() ; 
	console.log(`App listening on port ${PORT} started ${global.startDate.toLocaleString()}`);
})
