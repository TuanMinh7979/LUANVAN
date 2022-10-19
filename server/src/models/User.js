import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    name: { type: String },
    address: { type: String },
    avatar: { type: String },
    role: {
      type: String,
      enum: ["applicant", "rec", "admin"],
      default: "admin",
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
