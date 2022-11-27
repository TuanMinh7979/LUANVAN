import mongoose from "mongoose";
const { Schema } = mongoose;

const JobPostSchema = new Schema(
  {
    jobTitle: { type: String },

    location: { type: String },
    amount: { type: Number },
    jobType: {
      type: String,
    },

    deadline: { type: Date },
    gender: {
      type: String,
    },
    rank: {
      type: String,
    },
    exp: {
      type: String,
    },
    currency: {
      type: String,
      enum: ["USD", "VND"],
      default: "USD",
    },
    grossType: {
      type: String,
    },
    gross: {
      type: Number,
    },
    grossTo: {
      type: Number,
    },
    grossFrom: {
      type: Number,
    },
    fullAddress: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
    jobRequired: {
      type: String,
    },
    jobBenefit: {
      type: String,
    },
    skillRequired: {
      type: String,
    },


    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },
    companyId: {
      type: mongoose.Schema.ObjectId,
      ref: "Company",
      required: true,
    },
    recId: {
      type: mongoose.Schema.ObjectId,
      ref: "Rec",
      required: true,
    },



  },

  { timestamps: true }
);

const Job = mongoose.model("jobposts", JobPostSchema);
export default Job;
