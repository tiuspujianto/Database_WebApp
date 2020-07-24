var express = require('express');
var app = express();
const morgan = require('morgan');
var bodyparser=require('body-parser');

let db = [];
//Setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//Setup the static assets directories
app.use(express.static('images'));
app.use(express.static('css'));

app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({
    extended:false
}));

app.get('/', function (req, res) {
    let randomId = Math.round(Math.random() * 100);
    res.render('index.html');
});
app.get('/newtask', function (req, res) {
    res.render('newtask.html');
});
app.post('/add', function (req, res) {
    let params = req.body
    let newRec = {
        taskName: params.taskname,
        taskDue: params.taskdue,
        taskDesc: params.taskdesc
    }
    db.push(newRec);
    console.log(db)
    res.render('newtask.html');
});

app.get('/listtasks',function(req, res){
    var sortedDb = db.sort(function(task1,task2){
        return parseInt(task1.taskDue) - parseInt(task2.taskDue)
    });
    res.render('listtasks.html', {taskDb: sortedDb});
})

app.listen(8080);