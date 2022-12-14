import express from "express";
import { getAllResume, getByCharacterInField, viewCv } from "../controllers/resumeController.js";
const router = express.Router();

router.get("/all", getAllResume);
router.post("/getByCharacterInField", getByCharacterInField)
router.get("/view/:id", viewCv)

export default router;
