import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicantSchema = new Schema(
  {
    user_id: { type: String, required: true },
    experience: { type: String },
    education: { type: String },
    skills: { type: [String] },
    resume: { type: String },
    phone: { type: String },
  }
  //createAt and updateAt
);

const Applicant = mongoose.model("applicants", ApplicantSchema);
export default Applicant;
