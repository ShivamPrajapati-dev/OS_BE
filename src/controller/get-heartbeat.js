module.exports = function makeGetHeartbeat({ sendHeartbeat }) {
  return async function getHeartbeat() {
    try {
      const read = await sendHeartbeat();
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
