import express from "express";
import { createAContact, getAllContact } from "../controllers/contactController.js";
const router = express.Router();

router.get("/", getAllContact);
router.post("/", createAContact);



export default router;
