import express from "express";
import { getJobByListId } from "../controllers/recommendController.js";
const router = express.Router();



//create: ADMIN
router.post("/getJobByListId", getJobByListId);

export default router;
