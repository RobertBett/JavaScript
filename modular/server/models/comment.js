let mongoose = require('mongoose');


let CommentSchema =  new mongoose.Schema({
    comment: String,

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
});

mongoose.model('Comment', CommentSchema);
