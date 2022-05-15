const mongoose = require('mongoose')
const Student = require('../models/Student')

class Controller{

    getStudent(req,res) {
        Student.find({}, function(err, students) {
            res.json(students)
        })
    }

    getStudentId(req,res) {
        Student.findOne({'msv': req.body.msv}, function(err, students) {
            if(students.msv==msv)
                res.json(students)
        })
    }

    addStudent(req,res) {
        let data = {
            'msv' : req.body.msv,
            'name': req.body.name,
            'class': req.body.class,
            'address': req.body.address,
        }
        let connection = mongoose.connection
        connection.collection('students').insertOne(data, function(err,res) {
            if(err) throw err
            console.log('Them thanh cong')
        })
    }

    editStudent(req,res) {

    }

    deleteStudent(req,res) {

    }
}

module.exports = new Controller