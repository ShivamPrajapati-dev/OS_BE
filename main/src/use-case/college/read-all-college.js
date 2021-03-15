module.exports = function makeReadAllCollege({ College }) {
  return async function readAllCollege() {
    const data = await College.find({});

    if (!data) {
      throw new Error("No data found");
    }

    return data;
  };
};
