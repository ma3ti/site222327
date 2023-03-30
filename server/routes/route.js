const { log } = require('console');
const express = require('express');
const path = require('path');
const router = express.Router()


// Show HOMEPAGE
router.get('/', async (req, res) => {
    //res.send('<h1> Hello World !!! </h1>');
    res.status(200).sendFile(path.join(__dirname, '../../src/public/views/homepage.html'))
    //console.log(path.join(__dirname, '../../src/public/views/homepage.html'));
})

// About page
router.get('/about', async(req, res) => {
    res.send('<h1> About page </h1>');
});


module.exports = router;