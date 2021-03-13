module.exports = function makeGetCollegeByName({readCollegeByName}){
    return async function getCollegeByName(httpRequest){
        const info = httpRequest.body;
       
        try {
            const read = await readCollegeByName(info);

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