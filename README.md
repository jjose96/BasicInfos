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

Passing 
