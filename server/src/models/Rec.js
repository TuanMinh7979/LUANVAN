import mongoose from "mongoose";
const { Schema } = mongoose;

const RecSchema = new Schema(
  {
    email: { type: String },
    name: { type: String },
    address: { type: String },
    avatar: { type: String },
    user_id: { type: String },
    phone: { type: String },
    company_name: { type: String },
  },
  { timestamps: true }
);

const Rec = mongoose.model("recs", RecSchema);
export default Rec;
