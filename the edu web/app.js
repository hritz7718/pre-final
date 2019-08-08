var express = require('express');

var app = express();

app.use('/style',express.static('style'));
app.use('/js_files',express.static('js_files'));
app.use('/jquery-ui',express.static('jquery-ui'));



app.get('/home',function(req,res){
    res.sendFile(__dirname + '/index1.html');
});
app.get('/index1.html',function(req,res){
    res.sendFile(__dirname + '/index1.html');
});

app.get('/signup.html',function(req,res){
    res.sendFile(__dirname + '/signup.html');
});

app.get('/login.html',function(req,res){
    res.sendFile(__dirname + '/login.html');
});

app.get('/cont',function(req,res){
    res.send("this is a cont page");
});

app.get('/factorization.html',function(req,res){
    res.sendFile(__dirname + '/factorization.html');
});

app.get('/summ_forces.html',function(req,res){
    res.sendFile(__dirname + '/summ_forces.html');
});

app.get('/three_eqns.html',function(req,res){
    res.sendFile(__dirname + '/three_eqns.html');
});

app.get('/two_eqns.html',function(req,res){
    res.sendFile(__dirname + '/two_eqns.html');
});

app.get('/matrix_2x2.html',function(req,res){
    res.sendFile(__dirname + '/matrix_2x2.html');
});

app.get('/matrix_3x3.html',function(req,res){
    res.sendFile(__dirname + '/matrix_3x3.html');
});

app.get('/calculator.html',function(req,res){
    res.sendFile(__dirname + '/calculator.html');
});

app.get('/voltage_rms.html',function(req,res){
    res.sendFile(__dirname + '/voltage_rms.html');
});

app.listen(3000);