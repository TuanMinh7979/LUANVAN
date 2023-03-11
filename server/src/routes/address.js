import express from "express";

import { createAddress, getAllAddress } from "../controllers/addressController.js";
const router = express.Router();
router.get("/", getAllAddress);
router.post("/", createAddress);

export default router;
