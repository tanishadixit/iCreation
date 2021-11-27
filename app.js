//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/home.html");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
