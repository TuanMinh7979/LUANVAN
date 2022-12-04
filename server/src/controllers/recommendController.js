
import Address from "../models/Address.js";
import { createError } from "../utils/errorUtil.js";



export const getJobByListId = async (req, res, next) => {
  try {

    res.status(200).json("abc");
  } catch (err) {
    next(err);
  }
};
