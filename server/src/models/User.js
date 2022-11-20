import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String },

    password: { type: String },

    role: {
      type: String,
      enum: ["candidate", "rec", "admin"],
      default: "candidate",
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
