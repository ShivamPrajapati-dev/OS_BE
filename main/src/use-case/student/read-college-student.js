const {makeStudent} = require('../../entities')

module.exports = function makeReadCollegeStudent({Student}){
    return async function readCollegeStudent(info){
        const student = makeStudent(info);

        if(!student.getCollegeId()){
            throw new Error('Must provide college id')
        }
        
        const data = await Student.find({college_id:student.getCollegeId()});

        if(!data){
            throw new Error('no data found')
        }

        return data
    }
}