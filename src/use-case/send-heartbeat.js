module.exports = function makeSendHeartbeat() {
  return function sendHeartbeat() {
    return Promise.resolve({
      msg: "I am Alive",
    });
  };
};
