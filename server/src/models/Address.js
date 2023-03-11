import mongoose from "mongoose";
const { Schema } = mongoose;
//tim bang ID

const AddressSchema = new Schema(
  {
    title: String,
   
  },
  { timestamps: true }
  //createAt and updateAt
);
const Address = mongoose.model("addresses", AddressSchema);
export default Address;