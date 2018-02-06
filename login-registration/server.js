let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port =8000;
let app = express();


//middleware
app.set('view engine', 'ejs');
app.set('views',__dirname + '/client/views');

app.use(express.static(__dirname+ '/client/static'));
app.use(bodyParser.urlencoded({ extended:true}));
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