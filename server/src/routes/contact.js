import express from "express";
import { checkToken, checkUser, checkAdmin } from "../utils/checkToken.js";
import {
  
  getAllContact,
} from "../controllers/contactController.js";
const router = express.Router();
router.use(checkToken);
router.use(checkAdmin);
router.get("/", getAllContact);

export default router;
