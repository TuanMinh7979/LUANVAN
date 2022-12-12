import mongoose from "mongoose";
const { Schema } = mongoose;



const ResumeSchema = new Schema(
  {
    activities: String,
    activitiesCv: String,
    address: {
      type: mongoose.Schema.ObjectId,
      ref: "addresss",
      
    },
    avatar: String,
    certifications: String,
    certificationsCv: String,
    dob: String,
    educationCv: String,
    email: String,
    experience: String,
    experienceCv: String,
    fulladdress: String,
    gender: String,
    name: String,
    objective: String,
    objectiveCv: String,
    phone: String,
    skills: String,
    skillsCv: String,
    title: String,


    candidateId: {
      type: mongoose.Schema.ObjectId,
      ref: "candidates",
      required: true
    },
    cvTemplate: {
      type: String,
      default: "CV1"
    }

  },

  //createAt and updateAt
  { timestamps: true }
);

const Resume = mongoose.model("resumes", ResumeSchema);
export default Resume;


