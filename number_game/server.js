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
app.post("/guess", (req, res) => {
    console.log(req.body);
    req.session.number = req.body.number
    req.session.message = "";
    if(req.body.number == req.session.computer){
        req.session.message += "Congratualtions! You guessed correctly! Computer was thinking: "+req.session.computer
        
    }else if (req.body.number >req.session.computer){
        return res.redirect('/high')

    }else if (req.body.number< req.session.computer){
        return res.redirect('/low')
    }
    console.log(req.session.message);
    console.log(req.session.computer);
    return res.redirect('/');
});

app.get('/',(req, res)=>{
    console.log('hello')
    req.session.computer = Math.trunc(Math.random()*101);
    console.log(req.session.computer);
    return res.render('index',{session: req.session});
})
app.get('/high',(req, res)=>{
    req.session.message += "You guessed too high try again "
    return res.render('index',{session: req.session});
})
app.get('/low',(req, res)=>{
    req.session.message += "You guessed too low try again "
    return res.render('index',{session: req.session});
})
// must be at bottom
app.listen(port, () => console.log(`listening on port ${port}...`));