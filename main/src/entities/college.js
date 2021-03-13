module.exports = function buildMakeCollege(){
    return function makeCollege({
        id,
        name,
        year_founded,
        city,
        state,
        country,
        student_count,
        courses
    }){

        if(!id && !name){
            throw new Error('Must provide id or name')
        }
        

        return Object.freeze({
            getId:()=> id,
            getName:()=>name,
            getFoundedYear:()=>year_founded,
            getCity:()=>city,
            getState:()=>state,
            getCountry:()=>country,
            getStudentCount:()=>student_count,
            getCourses:()=>courses
        });
    }

}