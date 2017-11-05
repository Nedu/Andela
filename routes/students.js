const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// INDEX - show all students
router.get("/students", function(req, res) {
	Student.find({}, function(err, allStudents){
		if(err){
			console.log(err);
		} else {
			res.render("index", {students: allStudents});
		}
	});
});

// CREATE - add new student to DB
router.post("/students", function(req, res) {
	Student.create(req.body.student, function(err, newStudent){
		if(err){
			res.render("new");
		} else {
			res.redirect("/students");
		}
	});
});

// NEW - show form to create new student
router.get("/students/new", function (req, res) {
	res.render("new");
})

// SHOW - shows more info about one student 
router.get("/students/:id", function(req, res){
	Student.findById(req.params.id, function(err, foundStudent){
		if(err){
			res.redirect("/students");
		} else {
			res.render("show", {student: foundStudent});
		}
	})
});

// EDIT STUDENT ROUTE
router.get("/students/:id/edit", function(req, res){
	Student.findById(req.params.id, function(err, foundStudent){
		if(err){
			res.redirect("/students");
		} else {
			res.render("edit", {student: foundStudent});
		}
	});
});

// UPDATE STUDENT ROUTE
router.put("/students/:id", function(req, res){
	Student.findByIdAndUpdate(req.params.id, req.body.student, function(err, updatedStudent){
		if(err){
			res.redirect("/students");
		} else {
			res.redirect("/students/" + req.params.id);
		}
	});
});

// DESTROY STUDENT ROUTE
router.delete("/students/:id", function(req, res){
	Student.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
			res.redirect("/students");
		} else {
			res.redirect("/students");
		}
	});
});


module.exports = router;