var express = require('express');
var exHb    = require("express3-handlebars");
var controllers = require(__dirname + "/controllers");
var config = require(__dirname + "/config");
var path = require('path');
var mw = require(__dirname + "/middleware");

var app = express();

// Mustache engine
app.engine("handlebars", exHb({
  defaultLayout : "main",
  helpers       : require(__dirname + "/presenters/header.js")
}));
app.set("view engine", "handlebars");


// Sessions (@TODO: update keys)
app.use(express.cookieParser(config.Cookie.Secret));
app.use(express.cookieSession({ secret: config.Session.Secret, cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }}));
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'views/public')));
app.use(mw.addCategories);
app.use(mw.addUrl);

// Middleware to check authentication state
var publicRoutes = [
  "/",
  "/category/*",
  "/boss"
];
app.all("/*", mw.checkSessions(publicRoutes));


app.get("/", controllers.home);
app.get("/healthcheck", controllers.healthcheck);
app.get("/category/:name", controllers.home);


//Admin

app.get("/boss", controllers.boss.login);
app.post("/boss", controllers.boss.login);
app.get("/boss/register", controllers.boss.register);
app.post("/boss/register", controllers.boss.register);
app.get("/boss/article", controllers.boss.article);
app.post("/boss/article", controllers.boss.article);
app.get("/boss/category", controllers.boss.category);
app.post("/boss/category", controllers.boss.category);

app.listen(config.FinestLife.port);
console.log('Listening on port '+ config.FinestLife.port );
