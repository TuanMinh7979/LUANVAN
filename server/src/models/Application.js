import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicantSchema = new Schema(
  {
    jobId: { type: mongoose.Schema.ObjectId, ref: "JobPost", required: true },
    resumeId: { type: mongoose.Schema.ObjectId, ref: "Resume", required: true },
    candidateId: { type: mongoose.Schema.ObjectId, ref: "Resume", required: true },
    recId: { type: mongoose.Schema.ObjectId, ref: "Resume", required: true },
    
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
