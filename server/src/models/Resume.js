import mongoose from "mongoose";
const { Schema } = mongoose;

const ContactInfoSchema = mongoose.Schema({
  fullName: String,
  title: String,
  dob: String,
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  phone: String,
  address: String,
  avatar: String,
  email: String,
  website: String,
});

const ResumeSchema = new Schema(
  {
    contact: ContactInfoSchema,
    interest: String,
    objective: String,
    education: String,
    experience: String,
    activities: String,
    awards: String,
    skills: String,
    skillsVal: String,
    certifications: String,
    certificationsVal: String
  },

  //createAt and updateAt
  { timestamps: true }
);

const Resume = mongoose.model("resumes", ResumeSchema);
export default Resume;
