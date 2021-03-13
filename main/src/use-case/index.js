const College = require('../model/college')
const Student = require('../model/student')

//for college
const makeReadCollegeById = require('./college/read-college-by-id')
const makeReadCollegeByName = require('./college/read-college-by-name')
const makeReadSimilarCollege = require('./college/read-similar-college')

const readCollegeById = makeReadCollegeById({College})
const readCollegeByName = makeReadCollegeByName({College})
const readSimilarCollege = makeReadSimilarCollege({College})

//for Student
const makeReadStudent = require('./student/read-student')
const makeReadCollegeStudent = require('./student/read-college-student')

const readStudent = makeReadStudent({Student})
const readCollegeStudent = makeReadCollegeStudent({Student})

module.exports = {readCollegeById, readCollegeByName, readSimilarCollege, readStudent, readCollegeStudent}

