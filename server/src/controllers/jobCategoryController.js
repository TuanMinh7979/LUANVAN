import JobCategory from "../models/JobCategory.js";
import { createError } from "../utils/errorUtil.js";
//

//category for job nha
export const getAllJobCategory = async (req, res, next) => {
  try {
    const jobCategories = await JobCategory.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};
export const createAJobCategory = async (req, res, next) => {
  try {
    const jobCategory = new JobCategory(req.body)
    await jobCategory.save();
    res.status(200).json(jobCategory);
  } catch (err) {
    next(err);
  }
};
