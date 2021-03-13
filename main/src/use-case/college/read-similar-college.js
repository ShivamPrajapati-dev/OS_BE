const {makeCollege} = require('../../entities')
module.exports = function makeReadSimilarCollege({College}){
    return async function readSimilarCollege(info){


        const giveCollege = makeCollege(info);
        
        if(giveCollege.getId()){

            const givenData = await College.findOne({id:giveCollege.getId()});

            if(!givenData){
                throw new Error('Given College not found')
            }

            const similarData = await College.find({
                                                    city:givenData.city,
                                                    state:givenData.state,
                                                    courses:{
                                                        $in:givenData.courses
                                                    },
                                                    student_count:{
                                                        $gte:Math.max(givenData.student_count-100,0),
                                                        $lte:givenData.student_count+100
                                                    }
                                                })
            
            if(!similarData){
                throw new Error('No data found')
            }   
            
            return similarData

        }else if(giveCollege.getName()){
            
            const givenData = await College.findOne({id:giveCollege.getName()});
            
            if(!givenData){
                throw new Error('Given College not found')
            }

            const similarData = await College.find({
                                                    city:givenData.city,
                                                    state:givenData.state,
                                                    courses:{
                                                        $in:givenData.courses
                                                    },
                                                    student_count:{
                                                        $gte:Math.max(givenData.student_count-100,0),
                                                        $lte:givenData.student_count+100
                                                    }
                                                })
            
            if(!similarData){
                throw new Error('No data found')
            }

            return similarData

        }
    }
}