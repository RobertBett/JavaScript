let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: String,

}, {timestamps: true});


//here were attaching the schema to a new model

mongoose.model('User', UserSchema);