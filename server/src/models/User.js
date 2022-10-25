import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String },

    password: { type: String },

    role: {
      type: String,
      enum: ["applicant", "rec", "admin"],
      default: "admin",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  }
  //createAt and updateAt
);

const User = mongoose.model("users", UserSchema);
export default User;
