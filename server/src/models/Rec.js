import mongoose from "mongoose";
const { Schema } = mongoose;

const RecSchema = new Schema({
  user_id: { type: String },
  phone: { type: String },
  company_name: { type: String },
});

const Rec = mongoose.model("recs", RecSchema);
export default Rec;
