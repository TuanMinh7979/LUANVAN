import mongoose from "mongoose";
const { Schema } = mongoose;

const RecSchema = new Schema(
  {
    user_id: { type: String, required: true },
    phone: { type: String, required: true },
    company_name: { type: String, required: true },
    image: { type: string },
  },
  //createAt and updateAt
  { timestamps: true }
);

const Rec = mongoose.model("recs", RecSchema);
export default Rec;
