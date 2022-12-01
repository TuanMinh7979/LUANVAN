import mongoose from "mongoose";
import JobPost from "./JobPost.js";
const { Schema } = mongoose;

const CandidateSchema = new Schema(
  {
    //contact info
    name: String,
    dob: Date,
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    phone: String,
    address: String,
    avatar: String,
    email: String,

    age: { type: Number },

    saveJobs: [{ type: mongoose.Schema.ObjectId, ref: "JobPost" }],


    //one to one
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
  },
  { timestamps: true }
  //createAt and updateAt
);

const Candidate = mongoose.model("candidates", CandidateSchema);
export default Candidate;
