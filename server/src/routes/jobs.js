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

//check cai secret thoi co deo gi dau
router.get("/checkauthen", checkToken, (req, res, next) => {
  res.send("authensuccess");
});
//check payload.isAdmin === true hay khong
router.get("/checkadmin", checkAdmin, (req, res, next) => {
  res.send("you are admin");
});
//update
router.use(checkToken);
router.get("/", checkAdmin, getAllUser);

router.put("/:id", checkUser, updateUser);
//delete

router.delete("/:id", checkUser, deleteUser);

//get

router.get("/:id", checkUser, getUser);

//getall

export default router;
