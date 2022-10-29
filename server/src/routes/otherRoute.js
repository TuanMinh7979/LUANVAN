import express from "express";
``;
import dotenv from "dotenv";
dotenv.config();
import { uploadImage } from "../utils/uploadUtil.js";

const router = express.Router();

//check xem secret token co thuoc ung dung nay hay khong
router.post("/updateimg", async (req, res, next) => {
  try {
    const upRs = await uploadImage(req.body.data);
    console.log("__________________________UPLOAD RS", upRs);
    return res.status(200).json({ status: 200 });
  } catch (e) {
    return next(e);
  }
});

export default router;
