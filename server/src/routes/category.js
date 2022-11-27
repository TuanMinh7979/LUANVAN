import express from "express";
import {
  getAllCategory,

} from "../controllers/categoryController.js";
const router = express.Router();
//category for job nhe
//getAll: Home,...
router.get("/", getAllCategory);



export default router;
