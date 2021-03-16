module.exports = function makeSendHeartbeat() {
  return function sendHeartbeat() {
    return {
      msg: "I am Alive",
    };
  };
};
