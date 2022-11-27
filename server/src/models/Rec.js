import mongoose from "mongoose";
const { Schema } = mongoose;

const RecSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String , required: true},
    address: { type: String, required: true },
    phone: { type: String, required: true },

    avatar: { type: String },
    saveCvs: {
      type: [String],
    },
    //luc moi tao thi chua can companyName
    //companyName se cap nhat sau
    companyId: {
      type: mongoose.Schema.ObjectId,
      ref: "Company",
     
    },

    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },


  },
  { timestamps: true }
);

const Rec = mongoose.model("recs", RecSchema);
export default Rec;
