const buildMakeCollege = require('./college')
const buildMakeStudent = require('./student')

const makeCollege = buildMakeCollege()
const makeStudent = buildMakeStudent()

module.exports = {makeCollege, makeStudent}