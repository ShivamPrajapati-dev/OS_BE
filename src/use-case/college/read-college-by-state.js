module.exports = function makeReadCollegeByState({ College }) {
  return async function readCollegeState() {
    const total = await College.count();
    const data = await College.aggregate([
      {
        $group: {
          _id: "$state",
          count: { $sum: 1 },
        },
      },
    ]);

    if (!data) {
      throw new Error("No data found");
    }

    return { data, total };
  };
};
