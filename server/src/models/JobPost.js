import mongoose from "mongoose";
import Address from "./Address.js";
const { Schema } = mongoose;

const JobPostSchema = new Schema(
  {
    title: { type: String },

    locationId: {
      type: mongoose.Schema.ObjectId,
      ref: "addresss",
      required: true
    },
    amount: { type: Number },
    workTypeId: {
      type: mongoose.Schema.ObjectId,
      ref: "worktypes",
      required: true
    },

    acceptDate: { type: Date },
    endDate: { type: Date },
    workExpId: {
      type: mongoose.Schema.ObjectId,
      ref: "workexps",
      required: true
    },
    rankId: {
      type: mongoose.Schema.ObjectId,
      ref: "ranks",
      required: true
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

    salaryTypeId: {
      type: mongoose.Schema.ObjectId,
      ref: "salarytypes",
      required: true
    },

    salaryMin: {
      type: Number, default: 0
    },
    salaryMax: {
      type: Number, default: 999999999
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
