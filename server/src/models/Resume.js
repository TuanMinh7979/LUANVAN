import mongoose from "mongoose";
const { Schema } = mongoose;



const ResumeSchema = new Schema(
  {
    name: String,
    title: String,
    dob: String,
    gender: String,
    phone: String,
    avatar: String,
    email: String,
    fullAddress: String,
    // 
    interest: String,
    objective: String,
    education: String,
    experience: String,
    activities: String,
    skills: String,
    certifications: String,
    //block
    //for cv
    interestCv: String,
    objectiveCv: String,
    educationCv: String,
    experienceCv: String,
    activitiesCv: String,
    skillsCv: String,
    certificationsCv: String,

  },

  //createAt and updateAt
  { timestamps: true }
);

const Resume = mongoose.model("resumes", ResumeSchema);
export default Resume;


