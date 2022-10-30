import mongoose from "mongoose";
const { Schema } = mongoose;

const RecSchema = new Schema(
  {
    email: { type: String },
    name: { type: String },
    address: { type: String },
    avatar: { type: String },
    userId: { type: String, required: true, unique: true },
    phone: { type: String },
    companyName: { type: String },
    companyId: { type: String },
    saveCvs: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Rec = mongoose.model("recs", RecSchema);
export default Rec;
