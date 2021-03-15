module.exports = function makeGetSimilarCollege({ readSimilarCollege }) {
  return async function getSimilarCollege(httpRequest) {
    const info = httpRequest.body;

    try {
      const read = await readSimilarCollege(info);

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
