var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Nodejs sagt "Hallo aus dem Container!"');
});

app.listen(8080);