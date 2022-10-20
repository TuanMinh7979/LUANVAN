import express from "express";
import jwt from "jsonwebtoken";
const { verify } = jwt;
import {
  getAllJob,
  createJob,
  updateJob,
  deleteJob,
  getJob,
} from "../controllers/jobController.js";
import { checkAdmin, checkToken, checkUser } from "../utils/checkToken.js";

const router = express.Router();

// router.use(checkToken);


//Sau này rảnh thì thêm chức năng duyệt job của thằng rec gởi lên, giờ thì cứ cho nó tạo thẳng
//create: RecHome
router.post("/", createJob);

//update: RecHome
router.put("/:id", updateJob);

//delete: RecHome
router.delete("/:id", deleteJob);

//get: JobDetail, RecHome
router.get("/:id", getJob);

//API PHAN TRANG


//get : home,  ADMIN
router.get("/", getAllJob);

export default router;
