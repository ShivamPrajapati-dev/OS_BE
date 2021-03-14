module.exports = function makeGetCollegeByState({ readCollegeByState }) {
  return async function getCollegeByState() {
    try {
      const read = await readCollegeByState();

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
