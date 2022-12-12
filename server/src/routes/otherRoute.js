import express from "express";

import dotenv from "dotenv";
dotenv.config();
import { uploadImage } from "../utils/uploadUtil.js";

const router = express.Router();

router.post("/updateimg", async (req, res, next) => {
  try {
    //await a new promise

    const upRs = await uploadImage(req.body.data, "ifo999");

    if (upRs && upRs.secure_url) {
      return res.status(200).json({ status: 200, data: upRs.secure_url });
    } else {
      return res.status(200).json({ status: 500, data: "Upload failed" });
    }
  } catch (e) {
    return next(e);
  }
});

export default router;
