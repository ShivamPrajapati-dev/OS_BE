const {makeCollege} = require('../../entities')
module.exports = function makeReadCollegeById({College}){
    return async function readCollegeId(info){


        const college = makeCollege(info);
        
        if(!college.getId()){
            throw new Error('Must provide college id')
        }

        const data = await College.findOne({id:college.getId()});
        
        if(!data){
            throw new Error('No data found');
        }
        
        return data;
        
    }
}