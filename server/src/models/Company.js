import mongoose from "mongoose";
const { Schema } = mongoose;

const CompanySchema = new Schema(
  {
    name: {
      type: String,

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
    linkToLogo: {
      type: String
    },
    members: {
      type: String
    },



  },

  //createAt and updateAt
  { timestamps: true }
);

const Company = mongoose.model("companies", CompanySchema);
export default Company;
