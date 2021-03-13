const {makeCollege} = require('../../entities')
module.exports = function makeReadCollegeByName({College}){
    return async function readCollegeName(info){


        const college = makeCollege(info);
        
        if(!college.getName()){
            throw new Error('Must provide college name')
        }

        const data = await College.findOne({name:college.getName()});
        
        if(!data){
            throw new Error('No data found');
        }
        
        return data;
        
    }
}