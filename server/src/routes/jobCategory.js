import express from "express";

import { getAllJobCategory, createAJobCategory } from "../controllers/jobCategoryController.js";
const router = express.Router();
router.get("/", getAllJobCategory);
router.post("/", createAJobCategory);



export default router;
