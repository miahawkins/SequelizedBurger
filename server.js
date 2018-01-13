// Required dependencies
var express = require("express");
// var methodOverride = require("method-override");
var bodyParser = require("body-parser");



// Start express
var port = process.env.PORT || 3000;
console.log(port);
var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

// Set handlebars as the view engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Make CSS work
// app.use(express.static(process.cwd() + "/public"));


// Import Routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(port);
