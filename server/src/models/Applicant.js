import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicantSchema = new Schema(
  {
    user_id: { type: String, required: true },
    experience: { type: String, required: true },
    education: { type: String, required: true },
    skills: { type: String, required: true },
    resume: { type: String, required: true },
    image: { type: String, required: true },
  },
  //createAt and updateAt
  { timestamps: true }
);

const Applicant = mongoose.model("applicants", ApplicantSchema);
export default User;
