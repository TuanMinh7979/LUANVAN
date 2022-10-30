import mongoose from "mongoose";
const { Schema } = mongoose;

const ContactInfoSchema = mongoose.Schema({
  name: String,
  major: String,
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  social: {
    type: String,
  },
});
const Education = mongoose.Schema({
  school: String,
  majors: String,
});
const WorkExperience = mongoose.Schema({
  startDate: Date,
  endDate: Date,
  companyName: String,
  position: String,
  desc: String,
});
const Activities = mongoose.Schema({
  startDate: Date,
  endDate: Date,
  orgName: String,
  position: String,
  desc: String,
});

const ResumeSchema = new Schema(
  {
    contactInfo: ContactInfoSchema,
    interest: [String],
    objective: String,
    education: [Education],
    workExperience: [WorkExperience],
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
