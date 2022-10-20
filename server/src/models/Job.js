import mongoose from "mongoose";
const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    //job so many should store like foreign key in  job schema
    rec_id: { type: String, required: true },
    company_name: {
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
    start_date: {
      type: Date,
    },
    //job so many should store like foreign key in  job schema
    category_id: {
      type: String,
      required: true,
    },
    //tao luoi tao viet tat cho nhanh
    expir_Date: {
      type: Date,
    },

    salary: {
      type: Number,
    },
  },
  //createAt and updateAt
  { timestamps: true }
);

const Job = mongoose.model("jobs", JobSchema);
export default Job;
