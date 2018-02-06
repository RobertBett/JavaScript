// require my npm modules
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let port = 8000;

let app = express();

//set up middleware
//views
app.set('view engine',"ejs");
app.set("views", __dirname + "/views");

//static content
app.use(express.static(__dirname + '/static'));
//POST request
app.use(bodyParser.urlencoded({ extended: true}));
//session
app.use(session({
    secret: "whatever",
    resave: false,
    saveUninitialized:true,

}))

//routes
app.get('/',(req, res) => {
    return res.render('index')
})

app.get('/showUser', (req, res) => {
    if(req.session){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    return res.render('showUser', { session: req.session })

})

app.post('/login', (req, res) =>{
    //form data is always available at req.body
    req.session.email = req.body.email
    req.session.name = req.body.name
    return res.redirect('/showUser')
})
// must be at bottom
app.listen(port, () => console.log(`listening on port ${port}...`));
