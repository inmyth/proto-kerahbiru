var express = require("express");
var cors = require('cors')

const hostname = '127.0.0.1';
const port = 3000;

var app = express();
app.use(cors());
app.use(express.json());

var server = app.listen(port, function(){
    console.log("Node.js is listening to " + hostname + ":" + port);
});

app.get("/", function(req, res, next){
    let r = {data : "Hello"};
    res.json(r);
});

app.post("/login", function(req, res, next){
    let r = {
      success: true,
      data : {
        ownerId : 89,
        token : "abcdef123"
      }
    }
    if(req.body.password != 'abc'){
      res.status(401);
      r.success = false;
      r.data = null;
    }
    else{
      res.status(200);
    }
    res.json(r);  
});

app.get("/workers", function(req, res, next){
  const r = [
    {
      name: "Martin",
      title : "Welder",
      location: "Bandung"
    },
    {
      name: "Budi",
      title : "HVAC",
      location: "Jakarta"
    },
    {
      name: "Cahyadi",
      title : "Forklift",
      location: "Surabaya"
    },
    {
      name: "Utama",
      title : "Crane",
      location: "Semarang"
    },
    {
      name: "AB",
      title : "Welder",
      location: "Bandung"
    },
    {
      name: "BC",
      title : "HVAC",
      location: "Jakarta"
    },
    {
      name: "DE",
      title : "Forklift",
      location: "Surabaya"
    },
    {
      name: "EF",
      title : "Crane",
      location: "Semarang"
    },
    {
      name: "FG",
      title : "Welder",
      location: "Bandung"
    },
    {
      name: "HI",
      title : "HVAC",
      location: "Jakarta"
    },
    {
      name: "IJ",
      title : "Forklift",
      location: "Surabaya"
    },
    {
      name: "JK",
      title : "Crane",
      location: "Semarang"
    },
  ]
  res.json(r);
});