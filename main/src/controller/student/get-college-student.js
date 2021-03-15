module.exports = function makeGetCollegeStudent({ readCollegeStudent }) {
  return async function getCollegeStudent(httpRequest) {
    const info = httpRequest.body;

    try {
      const read = await readCollegeStudent(info);

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
