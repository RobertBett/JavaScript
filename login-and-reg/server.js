let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port =8000;
let app = express();
let path = require('path');


//middleware
app.set('view engine', 'ejs');
app.set('views',__dirname + '/client/views');

console.log(path.resolve(__dirname, 'public', 'dist'))
app.use(express.static(path.resolve(__dirname, 'public', 'dist')));
app.use(bodyParser.json());
app.use(session({
    secret: 'anything',
    resave: false,
    saveUninitialized: true
}))


//import database file
require('./server/config/mongoose');

//import the route file
require('./server/config/routes')(app);

app.listen(port,()=> console.log(`listening on port ${port}...`));