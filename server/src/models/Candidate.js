import mongoose from "mongoose";
const { Schema } = mongoose;
const ProfileSchema = mongoose.Schema({

  //for searching
  //full text search
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


});


const CandidateSchema = new Schema(
  //tim theo jobtitle ,kinh nghiem
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
      ref: "Address",
      required: true,
    },
    fullAddress: String,

    avatar: String,

    age: { type: Number },

    profile: {
      type: ProfileSchema
    },


    //
    saveJobs: [{ type: mongoose.Schema.ObjectId, ref: "JobPost" }],
    //one to one
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
  },
  { timestamps: true }
  //createAt and updateAt
);

const Candidate = mongoose.model("candidates", CandidateSchema);
export default Candidate;
