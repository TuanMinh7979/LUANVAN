import Category from "../models/Category.js";
import { createError } from "../utils/errorUtil.js";
//

//category for job nha
export const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

