import express from "express";
import { getCvByListId , getJobByListId} from "../controllers/recommendController.js";
const router = express.Router();



//create: ADMIN
router.post("/getCvByListId", getCvByListId);
router.post("/getJobByListId", getJobByListId);

export default router;
