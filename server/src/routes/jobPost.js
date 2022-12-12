import express from "express";
import jwt from "jsonwebtoken";

import {
  getAllJobPost,
  createJobPost,
  updateJobPost,
  deleteJobPost,
  getJobPost,
  showAllJobPost
 
} from "../controllers/jobPostController.js";

const router = express.Router();

router.post("/", createJobPost);

router.get("/showAllJobPost", showAllJobPost);

router.put("/:id", updateJobPost);

router.delete("/:id", deleteJobPost);

router.get("/:id", getJobPost);



router.get("/", getAllJobPost);




export default router;
