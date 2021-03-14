module.exports = function makeReadCollegeOfCourse({ College }) {
  return async function readCollegeOfCourse(info) {
    if (!info.course) {
      throw new Error("Must provide college course");
    }

    const data = await College.find({ courses: info.course });

    if (!data) {
      throw new Error("No data found");
    }

    return data;
  };
};
