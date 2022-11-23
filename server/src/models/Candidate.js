import mongoose from "mongoose";
const { Schema } = mongoose;
const ProfileSchema = mongoose.Schema({
  age: { type: Number },
  education: { type: String },
  major: {
    type: String,
  },
  skills: { type: [{}] },
  location: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  experience: { type: [{}] },
});
const CandidateSchema = new Schema(
  {
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
