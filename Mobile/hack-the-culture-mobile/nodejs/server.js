const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "student-dev.cln9evujnhyg.us-east-2.rds.amazonaws.com", // ip address of server running mysql
  user: "CJVadmin", // user name to your mysql database
  password: "Love8033885", // corresponding password
  database: "Communication_Database" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('connection successful');
});

