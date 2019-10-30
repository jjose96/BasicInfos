var express = require('express');
var app = express();
var bodyParser=require("body-parser"); 
const mongoose = require('mongoose');
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
mongoose.connect('mongodb://localhost:27017/web'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "Connection failed!")); 
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  db.collection("webtest").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.render('index',{result:result});
    db.close;
});});
app.post('/', function(req,res){ 
  var name = req.body.name;
  var email= req.body.email;
  var phone=req.body.phone; 
  var write={"name": name,"email":email,"phone":phone}
  db.collection('webtest').insertOne(write,function(err, collection){ 
    if (err) throw err; 
    console.log("Inserted!"); 
    db.close;
});});
app.listen(8080);