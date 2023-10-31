const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
require('body-parser-xml')(bodyParser);
app.use(cors());
app.use(bodyParser.json());
var fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
const db = require('./app/config/db.config.file.js');

app.use(function(req, res, next) { //allow cross origin requests
    if (req.method === 'OPTIONS') {
        console.log('!OPTIONS');
        var headers = {};
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        res.writeHead(200, headers);
        res.end();
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
  });



app.get('/', (req, res) => res.send("Hi Rajesh"));

app.listen(port, ()=> console.log("Host is listening"));