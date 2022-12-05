
import Address from "../models/Address.js";
import { createError } from "../utils/errorUtil.js";
import JobPost from "../models/JobPost.js";
import Resume from "../models/Resume.js";
import Company from "../models/Company.js";

export const getCvByListId = async (req, res, next) => {
  try {

    let rs = []
    if (req.body && req.body.suglistIdData) {
      const listId = req.body.suglistIdData
      for (let el of listId) {
        const item = await Resume.findById(el);
        rs.push(item)
      }
    }

    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};

export const getJobByListId = async (req, res, next) => {
  console.log("----------------><><><><<11111111111111111111111")
  try {

    let rs = []
    if (req.body && req.body.suglistIdData) {
      const listId = req.body.suglistIdData

      console.log(";;;;;;")
      for (let el of listId) {
        console.log(";;;;;;-----",typeof(el))
        let job = await JobPost.findById(el)
        let company = await Company.findById(job.companyId)
        rs.push({ ...job._doc, company })
      }
    }

    console.log(".....................",rs)
    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};
