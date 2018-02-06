const mongoose = require('mongoose');
const Note = mongoose.model('Note');

class NotesController {
     create(req,res){
         Note.create(req.body, (err, note) =>{
             if (err){
                 return res.json(err);
             }
             
             return res.json(note);
         })
     }

     index(req,res){
         console.log("string");
        Note.find({}).sort('-createdAt').exec((err, notes)=>{
            if (err){
                res.json(err);
            }
            res.json(notes);
        })

     }


}

const newLocal = module.exports = new NotesController();