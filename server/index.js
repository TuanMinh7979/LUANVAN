import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./src/routes/auth.js";
import userRoute from "./src/routes/user.js";
import categoryRoute from "./src/routes/category.js";
// import jobRoute from "./src/routes/job.js";
import jobPostRoute from "./src/routes/jobPost.js";
import companyRoute from "./src/routes/company.js";

import candidateRoute from "./src/routes/candidate.js";
import resumeRoute from "./src/routes/resume.js";

import otherRoute from "./src/routes/otherRoute.js";
import cookieParser from "cookie-parser";

import cors from "cors";
const app = express();

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
};

//middle ware

//for jwt
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/resume", resumeRoute);
app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/company", companyRoute);
// app.use("/api/job", jobRoute);
app.use("/api/jobpost", jobPostRoute);

//candidate update profile
app.use("/api/candidate", candidateRoute);

app.use("/api/other", otherRoute);

app.use((err, req, res, next) => {
  // console.log(">>>globalerr", err);
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(200).json({
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("nothing");
});

app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
