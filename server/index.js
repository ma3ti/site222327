const express   = require('express');
const apiRoutes = require('./routes/api_routes');
const routes    = require('./routes/route');
const path      = require('path');
require('dotenv').config();
const mongoDb   = require('./config/mongo');
const mySqlDb   = require('./config/mysql');
const PORT      = process.env.PORT || 5000;


// express app
let app = express();


app.use(express.static(path.join(__dirname, '../src/public')));
app.use('/api', apiRoutes);
app.use('/', routes);


app.listen(PORT, () => {
    global.startDate = new Date() ; 
	console.log(`App listening on port ${PORT} started ${global.startDate.toLocaleString()}`);
})
