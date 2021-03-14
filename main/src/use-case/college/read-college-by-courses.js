module.exports = function makeReadCollegeByCourses({ College }) {
  return async function readCollegeByCourses() {
    const total = await College.count();
    const data = await College.aggregate([
      { $unwind: "$courses" },
      { $group: { _id: "$courses", total: { $sum: 1 } } },
    ]);

    if (!data) {
      throw new Error("No data found");
    }

    return { data, total };
  };
};
