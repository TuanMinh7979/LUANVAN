import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: ["applicant", "rec", "admin"],
      default: "user",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  //createAt and updateAt
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
export default User;
