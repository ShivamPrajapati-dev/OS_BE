const {makeStudent} = require('../../entities')

module.exports = function makeReadStudent({Student}){
    return async function readStudent(info){
        const student = makeStudent(info);

        if(!student.getId()){
            throw new Error('Must provide student id')
        }
        

        const data = await Student.findOne({id:student.getId()});

        if(!data){
            throw new Error('no data found')
        }

        return data
    }
}