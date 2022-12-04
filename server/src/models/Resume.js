import mongoose from "mongoose";
const { Schema } = mongoose;



const ResumeSchema = new Schema(
  {


    aboutMeCV: String,
    activities: String,
    activitiesCv: String,
    address: String,
    avatar: String,
    certifications: String,
    certificationsCv: String,
    dob: String,
    educationCv: String,
    email: String,
    experience: String,
    experienceCv: String,
    fullAddress: String,
    gender: String,
    name: String,
    objective: String,
    objectiveCv: String,
    phone: String,
    skills: String,
    title: String,


    candidateId: {
      type: mongoose.Schema.ObjectId,
      ref: "Candidate",
      required: true
    },

  },

  //createAt and updateAt
  { timestamps: true }
);

const Resume = mongoose.model("resumes", ResumeSchema);
export default Resume;


