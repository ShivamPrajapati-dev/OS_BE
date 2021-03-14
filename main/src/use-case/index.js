const College = require("../model/college");
const Student = require("../model/student");

//for college
const makeReadCollegeById = require("./college/read-college-by-id");
const makeReadCollegeByName = require("./college/read-college-by-courses");
const makeReadSimilarCollege = require("./college/read-similar-college");
const makeReadCollegeByState = require("./college/read-college-by-state");
const makeReadCollegeOfState = require("./college/read-college-of-state");
const makeReadCollegeOfCourse = require("./college/read-college-of-course");

const readCollegeById = makeReadCollegeById({ College });
const readCollegeByCourses = makeReadCollegeByName({ College });
const readSimilarCollege = makeReadSimilarCollege({ College });
const readCollegeByState = makeReadCollegeByState({ College });
const readCollegeOfState = makeReadCollegeOfState({ College });
const readCollegeOfCourse = makeReadCollegeOfCourse({ College });

//for Student
const makeReadStudent = require("./student/read-student");
const makeReadCollegeStudent = require("./student/read-college-student");

const readStudent = makeReadStudent({ Student });
const readCollegeStudent = makeReadCollegeStudent({ Student });

module.exports = {
  readCollegeById,
  readCollegeByCourses,
  readCollegeByState,
  readCollegeOfState,
  readCollegeOfCourse,
  readSimilarCollege,
  readStudent,
  readCollegeStudent,
};
