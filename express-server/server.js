let express = require('express');
let bodyParser = require('body-parser');
let app = express();


//.set
app.set('views engine', 'ejs')
app.set('views',__dirname +'/views')

//.use
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: true}))


//routes
app.get('/', function(request, response){
    //pass data through to the view
    let users = [
        {name: "cody"},
        {name: "tim"},
        {name: "bob"},

    ]
    response.render('index.ejs',{ 'users': users})

})
app.get('/nextpage', function(request, response){
    response.render('next.ejs')

})
app.post('/users', function(request, response){
    console.log(request.body);
    response.redirect('/')
})
//always at the bottom
app.listen(8000, function(){
    console.log('listening on port 8000..')
});