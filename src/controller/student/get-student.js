module.exports = function makeGetStudent({readStudent}){
    return async function getStudent(httpRequest){
        const info = httpRequest.body;
       
        try {
            const read = await readStudent(info);

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