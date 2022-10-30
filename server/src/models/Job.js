import mongoose from "mongoose";
const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    //job so many should store like foreign key in  job schema
    recId: { type: String, required: true },
    companyName: {
      type: String,
      required: true,
    },
    desc: { type: String, required: true },
    type: {
      type: String,
      enum: ["fulltime", "partime", "online"],
      default: "fulltime",
    },
    level: {
      type: String,
      enum: ["Student", "Entry", "Experienced", "Manager", "Director"],
      default: "Student",
    },
    //default like company
    //useful for searching
    address: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
    },
    benefit: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    //job so many should store like foreign key in  job schema
    categoryId: {
      type: String,
      required: true,
    },
    //tao luoi tao viet tat cho nhanh
    expirDate: {
      type: Date,
    },
    vacancy: {
      type: Number,
      default: 1,
    },

    salaryRange: {
      salaryFrom: {
        type: Number,
      },
      salaryTo: {
        type: Number,
      },
    },
    idActive: {
      type: Boolean,
      defautl: false,
    },
  },
  //createAt and updateAt
  { timestamps: true }
);

const Job = mongoose.model("jobs", JobSchema);
export default Job;
