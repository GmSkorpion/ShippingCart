'use strict'
 
/* to start up the server*/
var express = require('express');
 
var app = express();
/*path to public folder*/
app.use('/public', express.static(__dirname + '/public'));
/*path to node_modules folder*/
app.use('/node_modules', express.static(__dirname + '/node_modules'));
/*setting up the port*/
app.listen('3000',function(){
    console.log('Server running at http://localhost:3000 !!')
})
/*setting up root page*/
app.get('/',function(req,res){
    res.sendFile('main.html',{'root':__dirname + '/public'});
})