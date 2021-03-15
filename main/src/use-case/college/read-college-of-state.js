const { makeCollege } = require("../../entities");
module.exports = function makeReadCollegeOfState({ College }) {
  return async function readCollegeOfState(info) {
    const college = makeCollege(info);

    if (!college.getState()) {
      throw new Error("Must provide college state");
    }

    const data = await College.find({ state: college.getState() });

    if (!data) {
      throw new Error("No data found");
    }

    return data;
  };
};
