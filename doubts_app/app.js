var express = require('express');
var app = express();
var todoController = require('./controller/todocontroller');

//setting template engine
app.set('view engine','ejs');

//static files setting
app.use('/public',express.static('public'));
app.use('/jquery-ui',express.static('jquery-ui'));

//firing controller
todoController(app);

//listening to port

app.listen(3000);
console.log('hello 3000');

//using the MVC structure