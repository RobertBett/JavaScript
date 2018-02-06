let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;
let app = express();

//set up middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname+'/client/static'));

app.set('view engine', 'ejs');
app.set('views',__dirname+ '/client/views');

//import database file
require('./server/config/mongoose');

//import the route file
require('./server/config/routes')(app);



app.listen(port, ()=> console.log(`listening on port ${port}...`));