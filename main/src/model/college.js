const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },

    year_founded: {
      type: Date,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    student_count: {
      type: Number,
    },
    courses: [String],
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("college", schema);
module.exports = model;
