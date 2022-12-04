import express from "express";
import jwt from "jsonwebtoken";
const { verify } = jwt;

import { updateCandidateProfile, createResume, getMyCV } from "../controllers/candidateController.js";
import { checkAdmin, checkToken, checkUser } from "../utils/checkToken.js";

const router = express.Router();

//check is this app token 
router.use(checkToken);
//check is token of logged user
router.put("/:id/profile", checkUser, updateCandidateProfile);
router.post("/:id/resume", checkUser, createResume);
router.get("/:id/resume", checkUser, getMyCV);
export default router;
