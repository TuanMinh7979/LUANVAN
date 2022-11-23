import mongoose from "mongoose";
const { Schema } = mongoose;
const ProfileSchema = mongoose.Schema({
  education: { type: String },
  major: {
    type: String,
  },
  skills: { type: [String] },
  location: {
    type: String,
  },



});
const CandidateSchema = new Schema(
  {
    age: { type: Number },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: { type: String },
    name: { type: String },
    address: { type: String },
    avatar: { type: String },
    userId: { type: String, required: true, unique: true },
    resume: { type: String },
    phone: { type: String },
    profile: { type: ProfileSchema },
    saveJobs: {
      type: [String],
    },
  },
  { timestamps: true }
  //createAt and updateAt
);

const Candidate = mongoose.model("candidates", CandidateSchema);
export default Candidate;
