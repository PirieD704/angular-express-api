var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var mongoUrl = "mongodb://localhost:27017/students";
var Student = require('../models/students');
mongoose.connect(mongoUrl);

// var student = new Student({
// 	name: "Brett",
// 	gender: "male"
// })

// student.save();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getStudents', function(req, res, next){
	Student.find({}, function(error, documents){
		res.json(documents);
	})
	// res.json({message: "No Students Found"});
})

module.exports = router;
