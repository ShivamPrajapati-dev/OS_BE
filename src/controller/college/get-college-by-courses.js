module.exports = function makeGetCollegeByCourses({ readCollegeByCourses }) {
  return async function getCollegeByCourses() {
    try {
      const read = await readCollegeByCourses();

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: read,
      };
    } catch (e) {
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
