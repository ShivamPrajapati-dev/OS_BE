module.exports = function makeGetCollegeOfState({ readCollegeOfState }) {
  return async function getCollegeOfState(httpRequest) {
    const info = httpRequest.body;
    console.log(info);
    try {
      const read = await readCollegeOfState(info);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: read,
      };
    } catch (e) {
      console.log(e);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};
