const express = require('express');
const abc = express();

const path = require('path');
const PORT = 8000;

abc.use(express.static('public'));

abc.get('/', function(req,res){
    res.send("hello world");
});

abc.get('/basefile', function(req,res){
    res.send("Employee data");
});

abc.listen(PORT, function(){
    console.log(`server listening on port number::${PORT}`)
});