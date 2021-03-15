const {
  readCollegeById,
  readCollegeByCourses,
  readCollegeByState,
  readCollegeOfState,
  readCollegeOfCourse,
  readAllCollege,
  readSimilarCollege,
  readCollegeStudent,
  readStudent,
} = require("../use-case");

//for college
const makeGetCollegeById = require("./college/get-college-by-id");
const makeGetCollegeByName = require("./college/get-college-by-courses");
const makeGetSimilarCollege = require("./college/get-similar-college");
const makeGetCollegeByState = require("./college/get-college-by-state");
const makeGetCollegeOfState = require("./college/get-college-of-state");
const makeReadCollegeOfCourse = require("./college/get-college-of-course");
const makeGetAllCollege = require("./college/get-all-college");

const getCollegeById = makeGetCollegeById({ readCollegeById });
const getCollegeByCourses = makeGetCollegeByName({ readCollegeByCourses });
const getSimilarCollege = makeGetSimilarCollege({ readSimilarCollege });
const getCollegeByState = makeGetCollegeByState({ readCollegeByState });
const getCollegeOfState = makeGetCollegeOfState({ readCollegeOfState });
const getCollegeOfCourse = makeReadCollegeOfCourse({ readCollegeOfCourse });
const getAllCollege = makeGetAllCollege({ readAllCollege });

//for student
const makeGetStudent = require("./student/get-student");
const makeGetCollegeStudent = require("./student/get-college-student");

const getStudent = makeGetStudent({ readStudent });
const getCollegeStudent = makeGetCollegeStudent({ readCollegeStudent });

module.exports = {
  getCollegeById,
  getCollegeByCourses,
  getCollegeByState,
  getCollegeOfState,
  getCollegeOfCourse,
  getAllCollege,
  getSimilarCollege,
  getStudent,
  getCollegeStudent,
};
