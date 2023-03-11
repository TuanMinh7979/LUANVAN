import mongoose from "mongoose";
import Resume from "./Resume.js";
const { Schema } = mongoose;


const RecSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },

    avatar: { type: String },
    saveCvs: [{
      type: mongoose.Schema.ObjectId,
      ref: "resumes"
    }],

    companyId: {
      type: mongoose.Schema.ObjectId,
      ref: "companies",

    },

    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
      index: true
    },


  },
  { timestamps: true }
);

const Rec = mongoose.model("recs", RecSchema);
export default Rec;
