require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const {
    
    getCollegeById,
    getCollegeByName,
    getSimilarCollege,
    getStudent,
    getCollegeStudent

} = require('./controller')

const makeCallback = require('./express-callback');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//for college
app.post('/getcollegebyid', makeCallback(getCollegeById))
app.post('/getcollegebyname', makeCallback(getCollegeByName))
app.post('/getsimilarcollege', makeCallback(getSimilarCollege))

//for student
app.post('/getstudent', makeCallback(getStudent))
app.post('/getcollegestudent', makeCallback(getCollegeStudent))


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then((result)=>{
            app.listen(3000,()=>{
                console.log('Server is up on port 3000');
            });
        }).catch(e=>{
            console.log(e);
        })