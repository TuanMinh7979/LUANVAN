import mongoose from "mongoose";
const { Schema } = mongoose;
const ContactSchema = new Schema(
  {
    jobPostId: { type: mongoose.Schema.ObjectId, ref: "jobposts", required: true },
    resumeId: {
      type: mongoose.Schema.ObjectId,
      ref: "resumes",

    },
    candidateId: {
      type: mongoose.Schema.ObjectId,
      ref: "candidates",
      required: true,
    },
    recId: { type: mongoose.Schema.ObjectId, ref: "recs", required: true },

    process: {
      type: Number,
      enum: [1, 2, 3, 0],
      default: 1,
    },
    price: {
      type: Number
    },

  },
  { timestamps: true }
  //createAt and updateAt
);

const Contact = mongoose.model("contacts", ContactSchema);
export default Contact;
