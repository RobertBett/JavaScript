let mongoose = require('mongoose');
let User = mongoose.model('User');


class UsersController{
    //get all users from the db and display them on the page
    index(req, res){
        User.find({}, (err, users)=>{
            if(err){
                console.log(err);
            }
            res.render('index', { users: users})
        })
    }
}
module.exports = new UsersController();