module.exports = function buildMakeStudent(){

    return function makeStudent({
        id,
        name,
        batch_year,
        college_id,
        skills
    }){

        return Object.freeze({
            getId:()=> id,
            getName:()=>name,
            getBatchYear:()=>batch_year,
            getCollegeId:()=>college_id,
            getSkills:()=>skills
        });

    }
}