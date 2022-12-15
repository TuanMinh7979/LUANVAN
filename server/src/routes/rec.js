import express from "express";
import jwt from "jsonwebtoken";
const { verify } = jwt;
import { getJobs, getJobContacts, getAllMyContacts, getAll } from "../controllers/hrController.js";
import { checkAdmin, checkToken, checkUser } from "../utils/checkToken.js";

const router = express.Router();
router.use(checkToken);
router.get("/:id/job/:jobPostId/jobcontacts", checkUser, getJobContacts);
router.get("/:id/allmycontacts", checkUser, getAllMyContacts);
router.get("/:id/jobs", checkUser, getJobs);
router.get("/all", getAll);

export default router;
