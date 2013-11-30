var express = require('express');
var exHb    = require("express3-handlebars");
var controllers = require(__dirname + "/controllers");
var config = require(__dirname + "/config");
var path = require('path');

var app = express();

// Mustache engine
app.engine("handlebars", exHb({
  defaultLayout : "main"
}));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, 'views/public')));

app.get("/", controllers.home);

app.listen(config.FinestLife.port);
console.log('Listening on port '+ config.FinestLife.port );
