# Simple form with Nodejs and Mongodb

Repository contains a simple nodejs file to render a HTML page with EJS view engine. The form asks for 3 inputs such as name,email and phone number. The form is in POST method and on submitting it, the input fields will be passed to the main nodejs file app.js . 


```app.post('/', function(req,res){ 
  var name = req.body.name;
  var email= req.body.email;
  var phone=req.body.phone; 
  var write={"name": name,"email":email,"phone":phone}
  db.collection('webtest').insertOne(write,function(err, collection){ 
    if (err) throw err; 
    console.log("Inserted!"); 
    db.close;
});});
```

Here ```req.body.*``` will read the form inputs and store the results into corresponding variables.

### Passing to Mongodb

A JSON file format is created and stored it into another variable called ```write```. And by calling Mongodb code to import the data will put the document to the Mongodb database collections. Here ```webtest``` is the name of the collection in which I used for this project.

Mongoose node module is used for the mongodb connection and for other operations.

```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "Connection failed!")); 
```
### Reading data from collection

Following code will read the ```webtest``` collections and render the documents to the index.ejs . As I mentioned above , for to render outputs EJS view engine is used.
```
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  db.collection("webtest").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.render('index',{result:result});
    db.close;
});});
```

#### Modules used:

1) Express
2) Mongoose
3) Body-parser

Mongodb Compass is a handy UI for viewing inserted documents and setting up database.
