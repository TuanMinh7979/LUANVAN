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

const Education = mongoose.Schema({
  school: String,
  major: String,
});
const Experience = mongoose.Schema({
  from: String,
  to: String,
  companyName: String,
  position: String,
  desc: String,
});
const Activities = mongoose.Schema({
  role: String,
  from: String,
  to: String,
  organizationName: String,
  desc: String,
});

const ResumeSchema = new Schema(
  {
    contact: ContactInfoSchema,
    interest: [String],
    objective: String,
    education: [Education],
    experience: [Experience],
    activities: [Activities],
    skills: [{}],
    awards: [{}],
    certifications: [{}],
  },

  //createAt and updateAt
  { timestamps: true }
);

const Resume = mongoose.model("resumes", ResumeSchema);
export default Resume;
