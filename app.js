const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const app = express();
const Student = require("./models/student");

const studentRoutes = require("./routes/students");
const indexRoutes = require("./routes/index");

mongoose.connect("mongodb://nedu:arsenal@ds245715.mlab.com:45715/alc", function(err) {
	if(err) {
		console.log("Not connected to the database" + err);
	} else {
		console.log("Successfully connected to the database");
	}
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));


app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

app.use(indexRoutes);
app.use(studentRoutes);

app.listen(3000, function() {
	console.log('listening on 3000')
})