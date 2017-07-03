var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    //res.send("THE Homepage");
    res.render("index");
});


app.post('/uploads', upload.single('filename'), function (req, res, next) {
  if (req.file){
       var returnObj = {
           size : req.file.size
       }
       
       res.json(returnObj);
       
  }  else {
      console.log("error");
  }
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The file metadata microservice server is running...");
});