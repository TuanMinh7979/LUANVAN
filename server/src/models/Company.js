import mongoose from "mongoose";
const { Schema } = mongoose;

const CompanySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    location: { type: String },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    foundingAt: {
      type: Date
    },
    introduce: {
      type: String
    },
    members: {
      type: Number
    },
    logo: { type: String },


  },

  //createAt and updateAt
  { timestamps: true }
);

const Company = mongoose.model("companies", CompanySchema);
export default Company;
