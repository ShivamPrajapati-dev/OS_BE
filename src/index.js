require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");

const {
  getHeartbeat,
  getCollegeById,
  getCollegeByCourses,
  getCollegeByState,
  getCollegeOfState,
  getCollegeOfCourse,
  getAllCollege,
  getSimilarCollege,
  getStudent,
  getCollegeStudent,
} = require("./controller");

const makeCallback = require("./express-callback");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/getheartbeat", makeCallback(getHeartbeat));
//for college
app.post("/getcollegebyid", makeCallback(getCollegeById));
app.post("/getcollegebystate", makeCallback(getCollegeByState));
app.post("/getcollegeofstate", makeCallback(getCollegeOfState));
app.post("/getcollegeofcourse", makeCallback(getCollegeOfCourse));
app.post("/getallcollege", makeCallback(getAllCollege));

app.post("/getcollegebycourses", makeCallback(getCollegeByCourses));
app.post("/getsimilarcollege", makeCallback(getSimilarCollege));

//for student
app.post("/getstudent", makeCallback(getStudent));
app.post("/getcollegestudent", makeCallback(getCollegeStudent));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is up on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
