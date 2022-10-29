import mongoose from "mongoose";
const { Schema } = mongoose;

const CandidateSchema = new Schema(
  {
    email: { type: String },
    name: { type: String },
    address: { type: String },
    avatar: { type: String },
    user_id: { type: String, required: true },
    experience: { type: String },
    education: { type: String },
    skills: { type: [String] },
    resume: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
  //createAt and updateAt
);

const Candidate = mongoose.model("candidates", CandidateSchema);
export default Candidate;