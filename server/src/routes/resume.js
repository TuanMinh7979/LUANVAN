import express from "express";
import { createResume, getAllResume } from "../controllers/resumeController.js";
const router = express.Router();
//category for job nhe
//getAll: Home,...
router.get("/", getAllResume);

//create: ADMIN
router.post("/", createResume);

export default router;
