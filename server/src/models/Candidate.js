import mongoose from "mongoose";
const { Schema } = mongoose;
const ProfileSchema = mongoose.Schema({

  //FOR PROFILE 
  aboutMe: String,

  objective: String,
  education: String,
  experience: String,
  skills: String,
  activities: String,
  certifications: String,

  //FOR CV
  objectiveCv: String,
  educationCv: String,
  experienceCv: String,
  skillsCv: String,
  activitiesCv: String,
  certificationsCv: String,


});


const CandidateSchema = new Schema(
  //cap nhat thong tin candidate chinh la capnhatprofile
  //voi mot so truong la contact, mot so truong thuoc ve profile
  //rieng dia chi thi se luu duoi dang khoa ngoai toi bang address
  {
    title: String,
    //contact info
    name: String,
    dob: Date,
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: String,
    phone: String,
    addressId: {
      type: mongoose.Schema.ObjectId,
      ref: "addresss"
    },
    fullAddress: String,

    avatar: String,

    age: { type: Number },

    profile: {
      type: ProfileSchema
    },

    saveJobs: [{ type: mongoose.Schema.ObjectId, ref: "jobposts" }],
    applyJobs: [{ type: mongoose.Schema.ObjectId, ref: "jobposts" }],

    //one to one
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
      index: true
    },
  },
  { timestamps: true }
  //createAt and updateAt
);

const Candidate = mongoose.model("candidates", CandidateSchema);
export default Candidate;
