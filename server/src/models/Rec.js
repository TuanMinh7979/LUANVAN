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
      ref: "Resume"
    }],
    //luc moi tao thi chua can name
    //name se cap nhat sau
    companyId: {
      type: mongoose.Schema.ObjectId,
      ref: "Company",

    },

    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      index: true
    },


  },
  { timestamps: true }
);

const Rec = mongoose.model("recs", RecSchema);
export default Rec;
