import mongoose from "mongoose";
const { Schema } = mongoose;

const ContactInfoSchema = mongoose.Schema({
  name: String,
  title: String,
  dob: String,
  gender: String,
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
    certifications: String,


    
    skillsText: String,
    certificationsText: String
  },

  //createAt and updateAt
  { timestamps: true }
);

const Resume = mongoose.model("resumes", ResumeSchema);
export default Resume;


