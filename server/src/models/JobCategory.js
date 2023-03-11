import mongoose from "mongoose";
const { Schema } = mongoose;
//category cua job
const JobCategorySchema = new Schema(
  {
    title: { type: String, required: true },
  },

  { timestamps: true }
);

const JobCategory = mongoose.model("jobcategories", JobCategorySchema);
export default JobCategory;
