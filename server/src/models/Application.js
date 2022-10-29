import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicantSchema = new Schema(
  {
    applicantId: {
      type: String,
      required: true,
    },
    jobId: {
      type: String,
      required: true,
    },
    resumeId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
  //createAt and updateAt
);

const Applicant = mongoose.model("applications", ApplicantSchema);
export default Applicant;
