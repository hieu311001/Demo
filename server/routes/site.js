const express = require('express');
const router = express.Router()
const controller = require('../controllers/Controller')

router.get('/students', controller.getStudent)

router.get('/students/', controller.getStudentId)

router.post('/add-student', controller.addStudent)

router.put('/edit-student', controller.editStudent)

router.delete('/delete-student', controller.deleteStudent)

module.exports = router