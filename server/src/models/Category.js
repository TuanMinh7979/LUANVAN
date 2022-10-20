import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
  },

  { timestamps: true }
);

const Category = mongoose.model("categories", CategorySchema);
export default Category;
