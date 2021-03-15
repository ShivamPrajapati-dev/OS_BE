module.exports = function makeGetCollegeOfCourse({ readCollegeOfCourse }) {
  return async function getCollegeOfCourse(httpRequest) {
    const info = httpRequest.body;
    console.log(info);
    try {
      const read = await readCollegeOfCourse(info);

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
