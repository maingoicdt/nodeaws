var http = require("http");
const express= require("express")
var path = require("path");
var fs = require('fs');
var bodyParser = require("body-parser");
var mysql = require('mysql');

const app = express()

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
var publicPath = path.resolve(__dirname, "public");
app.use("/public",express.static(publicPath));



// var con_nodeaws = mysql.createPool({
//     connectionLimit : 30,
//     host: "pbvweb01v",
//     user: "root",
//     password: "123456",
//     database: "cutting_system"
//   });

app.get("/",function(req,res){
    res.render("booklib");
    res.end();
})

const port= process.env.port||8080;

app.listen(port,() => {
    console.log(port)
    console.log("nodejs aws start webserver");
})