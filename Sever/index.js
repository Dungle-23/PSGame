var express = require('express');
var path = require('path');
var morgan = require('morgan')
var app = express();

var db = require('./config/connect')
db.Connect()

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//morgan
app.use(morgan('combined'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen('3000', () =>{
    console.log("http://localhost:3000");
})