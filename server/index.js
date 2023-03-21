const express = require('express');

let app = express();




app.get('/', (req, res) => {
    res.send('<h1> Hello World !!! </h1>');
});









app.listen('5000', () => {
    console.log('Server is listening on port 5000 ...');
})
