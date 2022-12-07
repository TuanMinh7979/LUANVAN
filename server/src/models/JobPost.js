import mongoose from "mongoose";
import Address from "./Address.js";
const { Schema } = mongoose;

const JobPostSchema = new Schema(
  {
    title: { type: String },

    location: { type: String },
    amount: { type: Number },
    jobType: {
      type: String,
    },

    acceptDate: { type: Date },
    endDate: { type: Date },
    exp: {
      type: String,
    },
    rank: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Nam", "Nữ", "Không yêu cầu"],
    },
    currency: {
      type: String,
      enum: ["USD", "VND"],
      default: "USD",
    },

    salaryType: {
      type: String,
    
    },

    salaryMin: {
      type: Number,
    },
    salaryMax: {
      type: Number,
    },
    fullAddress: {
      type: String,
    },


    description: {
      type: String,
    },
    candidateRequired: {
      type: String,
    },
    benefit: {
      type: String,
    },



    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "jobcategories",
      required: true,
    },
    companyId: {
      type: mongoose.Schema.ObjectId,
      ref: "companies",
      required: true,
    },
    recId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recs",
      required: true,
    },

    descriptionText: {
      type: String,
    }
    ,
    candidateRequiredText: {
      type: String,
    },

    viewCount: {
      type: Number,
      default: 0
    }
    ,
  

  },

  { timestamps: true }
);

const JobPost = mongoose.model("jobposts", JobPostSchema);
export default JobPost;
