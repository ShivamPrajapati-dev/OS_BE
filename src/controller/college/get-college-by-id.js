module.exports = function makeGetCollegeById({readCollegeById}){
    return async function getCollegeById(httpRequest){
        const info = httpRequest.body;
       
        try {
            const read = await readCollegeById(info);

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: read
            }

        } catch (e) {
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body:{
                    error:e.message
                }
            }
        }
    }
}