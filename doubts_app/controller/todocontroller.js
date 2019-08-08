var data = [{item: 'question1'}];

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

//this is only a js file so u hav to export it

module.exports = function(app){

    app.get('/todo', function(req,res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser , function(req,res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req,res){
        data = data.filter(function(todo){
            return todo.item !== req.params.item;
        });
            res.json(data);
    });
};