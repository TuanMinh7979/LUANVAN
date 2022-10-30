import mongoose from "mongoose";
const { Schema } = mongoose;

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    companyCategory: {
      type: String,
      required: true,
    },
    address: { type: String },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    desc: { type: String },
    services: [{}],
  },
  //createAt and updateAt
  { timestamps: true }
);

const Company = mongoose.model("companies", CompanySchema);
export default Company;
