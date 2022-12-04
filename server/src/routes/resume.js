import express from "express";
import { getAllResume, getByCharacterInField } from "../controllers/resumeController.js";
const router = express.Router();

router.get("/", getAllResume);
router.post("/getByCharacterInField", getByCharacterInField)



export default router;
