import express from "express";
import { createARank, createASalaryType, createAWorkExp, createAWorkType } from "../controllers/codeModelsController.js";
const router = express.Router();

router.post("/salarytype/", createASalaryType);
router.post("/rank/", createARank);
router.post("/worktype/", createAWorkType);
router.post("/workexp/", createAWorkExp);




export default router;
