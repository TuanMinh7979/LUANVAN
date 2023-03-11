import express from "express";
import jwt from "jsonwebtoken";
const { verify } = jwt;

import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/UserController.js";
import { checkAdmin, checkToken, checkUser } from "../utils/checkToken.js";

const router = express.Router();

//check xem secret token co thuoc ung dung nay hay khong
router.use(checkToken);

//getAll : ADMIN
router.get("/", checkAdmin, getAllUser);

//check user chính chủ hoặc admin moi duoc xem va cap nhat thong tin ca nhan
//update: UserDetail,ADMIN...
router.put("/:id", checkUser, updateUser);

//delete: UserDetail, ADMIN,...
router.delete("/:id", checkUser, deleteUser);

//get: userDetail, ADMIN
router.get("/:id", checkUser, getUser);

export default router;
