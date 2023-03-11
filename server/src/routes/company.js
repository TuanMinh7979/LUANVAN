import express from "express";
import {

  createCompany,
} from "../controllers/companyController.js";
const router = express.Router();



//create: ADMIN
router.post("/", createCompany);

export default router;
