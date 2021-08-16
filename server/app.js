var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}))
app.use(bodyParser.urlencoded({extended:true}));

var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'runeskeeper'
});
app.use((req,res,next) => {
    req.con = connection,
    next()
});

var server = app.listen(4547, () =>{
    var host = server.address().address;
    var port = server.address().port;
});

connection.connect((error) =>{
    if(error) console.log(error);
    else console.log("connected");

});

const dataRouter = require('./routes/RkRouter.js');
app.use("/RunesKeeper",dataRouter);