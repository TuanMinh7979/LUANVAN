import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicantSchema = new Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    resumeId: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["consider", "interview", "offer", "accept", "refuse"],
      default: "consider",
    },
  },
  { timestamps: true }
  //createAt and updateAt
);

const Applicant = mongoose.model("applications", ApplicantSchema);
export default Applicant;
