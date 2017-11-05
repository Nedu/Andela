const mongoose = require("mongoose");

// SCHEMA SETUP
const studentSchema = new mongoose.Schema({
	name: String,
	image: String,
	email: String,
	dateofbirth: String,
	department: String,
	phone: String
});

module.exports = mongoose.model("Student", studentSchema);
