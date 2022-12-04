import express from "express";
import { getAllResume } from "../controllers/resumeController.js";
const router = express.Router();

router.get("/", getAllResume);




export default router;
