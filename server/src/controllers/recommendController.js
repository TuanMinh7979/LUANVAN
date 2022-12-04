
import Address from "../models/Address.js";
import { createError } from "../utils/errorUtil.js";
import JobPost from "../models/JobPost.js";
import Resume from "../models/Resume.js";

export const getJobByListId = async (req, res, next) => {
  try {

    let rs = []
    if (req.body && req.body.suglistIdData) {
      const listId = req.body.suglistIdData
      for (let el of listId) {
        const item = await Resume.findById(el);
        rs.push(item)
      }
    }
    console.log(rs)
    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};
