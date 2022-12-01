import express from "express";

import { getAllJobCategory, createAJobCategory } from "../controllers/jobCategoryController.js";
const router = express.Router();
//category for job nhe
//getAll: Home,...
router.get("/", getAllJobCategory);
router.post("/", createAJobCategory);



export default router;
