const { readCollegeById, readCollegeByName, readSimilarCollege, readCollegeStudent, readStudent } = require('../use-case')

//for college
const makeGetCollegeById = require('./college/get-college-by-id')
const makeGetCollegeByName = require('./college/get-college-by-name')
const makeGetSimilarCollege = require('./college/get-similar-college')

const getCollegeById = makeGetCollegeById({ readCollegeById })
const getCollegeByName = makeGetCollegeByName({ readCollegeByName })
const getSimilarCollege = makeGetSimilarCollege({ readSimilarCollege })

//for student
const makeGetStudent = require('./student/get-student')
const makeGetCollegeStudent = require('./student/get-college-student')

const getStudent = makeGetStudent({ readStudent })
const getCollegeStudent = makeGetCollegeStudent({ readCollegeStudent })

module.exports = { getCollegeById, getCollegeByName, getSimilarCollege, getStudent, getCollegeStudent }

