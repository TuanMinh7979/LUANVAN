import express from "express";
import jwt from "jsonwebtoken";

import {
  getAllJobPost,
  createJobPost,
  updateJobPost,
  deleteJobPost,
  getJobPost,
  getAllFromQuery
} from "../controllers/jobPostController.js";

const router = express.Router();

router.post("/", createJobPost);

router.put("/:id", updateJobPost);

router.delete("/:id", deleteJobPost);

router.get("/:id", getJobPost);

router.get("/", getAllJobPost);



export default router;
