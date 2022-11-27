import mongoose from "mongoose";
const { Schema } = mongoose;
const ProfileSchema = mongoose.Schema({
  //additional for contact info
  website: String,
  //
  //block
  interest: String,
  objective: String,
  education: String,
  experience: String,
  activities: String,
  awards: String,
  skills: String,
  certifications: String,

  //blockval
  skillsVal: String,
  certificationsVal: String    
});


const CandidateSchema = new Schema(
  {
    //contact info
    name: String,
    dob: Date,
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    phone: String,
    address: String,
    avatar: String,
    email: String,
    
    age: { type: Number },
    //one to one
    userId: { type: String, required: true, unique: true },
    profile: { type: ProfileSchema },
    saveJobs: {
      type: [String],
    },
  },
  { timestamps: true }
  //createAt and updateAt
);

const Candidate = mongoose.model("candidates", CandidateSchema);
export default Candidate;
