import express from "express";
import jwt from "jsonwebtoken";
const { verify } = jwt;
import { getJobs } from "../controllers/hrController.js";
import { checkAdmin, checkToken, checkUser } from "../utils/checkToken.js";

const router = express.Router();
router.use(checkToken);

router.get("/:id/jobs", checkUser, getJobs);
export default router;
