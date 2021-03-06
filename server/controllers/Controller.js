const mongoose = require('mongoose')
const Student = require('../models/Student')

class Controller {

    getStudent(req, res) {
        Student.find({}, function (err, students) {
            res.json(students)
        })
    }

    getStudentId(req, res) {
        Student.findOne({
            '_id': req.body.id
        }, function (err, students) {
            res.json(students)
        })
    }

    addStudent(req, res) {
        let data = {
            'msv': req.body.msv,
            'name': req.body.name,
            'class': req.body.class,
            'address': req.body.address,
        }
        let connection = mongoose.connection
        connection.collection('students').insertOne(data, function (err, res) {
            if (err) throw err
            console.log('Them thanh cong')
        })
    }

    editStudent(req, res) {
        let connection = mongoose.connection
        connection.collection('students').updateOne({
                msv: req.body.msv
            }, {
                $set: {
                    'msv': req.body.msv,
                    'name': req.body.name,
                    'class': req.body.class,
                    'address': req.body.address,
                }
            },
            function (err, res) {
                if (err) throw err
                console.log('Sua thanh cong')
            })
    }

    deleteStudent(req, res) {
        let connection = mongoose.connection
        connection.collection('students').deleteOne({msv: req.body.msv}, function (err, res) {
            if (err) throw err
            console.log('Xoa thanh cong')
        })
    }
}

module.exports = new Controller