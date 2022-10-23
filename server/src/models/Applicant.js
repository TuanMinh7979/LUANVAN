import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicantSchema = new Schema(
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

const Applicant = mongoose.model("applicants", ApplicantSchema);
export default Applicant;
