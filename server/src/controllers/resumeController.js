import Resume from "../models/Resume.js";
import Category from "../models/Resume.js";
import { createError } from "../utils/errorUtil.js";
//

export const getAllResume = async (req, res, next) => {
  try {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
  } catch (err) {
    next(err);
  }
};

export const createResume = async (req, res, next) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(200).send("Resume created successfully");
  } catch (e) {
    next(e);
  }
};