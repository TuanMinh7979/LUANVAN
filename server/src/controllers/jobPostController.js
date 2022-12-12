import dotenv from "dotenv";
dotenv.config();
import { createError } from "../utils/errorUtil.js";
import JobPost from "../models/JobPost.js";
import QueryTool from "../utils/queryTool.js";
import { getDecodedTokenData } from "../utils/TokenUtils.js";
import { getMatch, getSort, getPagination } from "../utils/agreUtil.js";
import Rec from "../models/Rec.js";
import Company from "../models/Company.js";
import axios from "axios";
import { filterSkipField } from "../utils/commonUtil.js";

export const createJobPost = async (req, res, next) => {
  try {
    let recUserId = "";
    if (req.user) {
      //use in app
      recUserId = req.user.id;
    } else {
      //use in postman
      const decodeTokenData = getDecodedTokenData(req);
      recUserId = decodeTokenData.id;
    }

    let rec = await Rec.findOne({ userId: recUserId });
    let newJobPost;
    if (req.body.fullAddress) {
      newJobPost = new JobPost({
        ...req.body,
        recId: rec.id,
        companyId: rec.companyId,
      });
    } else {
      let company = await Company.findById(rec.companyId);
      newJobPost = new JobPost({
        ...req.body,
        recId: rec.id,
        companyId: rec.companyId,
        fullAddress: company.location,
      });
    }

    await newJobPost.save();
    let url = `${process.env.DJANGOSERVER}/updateJobsFile`;
    const rs = await axios.get(url);
    console.log("update db success...");

    res.status(200).send("Tạo jobpost thành công!");
  } catch (e) {
    next(e);
  }
};
export const updateJobPost = async (req, res, next) => {
  try {
    const updatedJobPost = await JobPost.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (updatedJobPost === null)
      return next(createError(404, "Khong tim thay JobPost roi"));

    return res.status(200).json(updatedJobPost);
  } catch (err) {
    next(err);
  }
};
export const deleteJobPost = async (req, res, next) => {
  try {
    const deletedJobPost = await JobPost.findByIdAndDelete(req.params.id);
    if (deletedJobPost === null)
      return next(createError(404, "Khong tim thay JobPost roi"));

    return res.status(200).json("JobPost deleted");
  } catch (err) {
    next(err);
  }
};

export const getJobPost = async (req, res, next) => {
  try {
    const jobPost = await JobPost.findById(req.params.id).populate("companyId");

    if (jobPost === null)
      return next(createError(404, "Khong tim thay jobPost"));

    res.status(200).json({ ...jobPost._doc, companyId: jobPost.companyId });
  } catch (err) {
    next(err);
  }
};

// export const getAllJobPost = async (req, res, next) => {
//   console.log(req.query)
//   try {
//     let pipeLine = []
//     if (Object.keys(req.query).length > 0) {
//       let matchQuery = getMatch(req.query, "amount", "salaryMin");

//       if (Object.keys(matchQuery).length > 0) {
//         pipeLine.push({ $match: matchQuery })
//       }

//       if (req.query.sort) {
//         const sortStage = getSort(req.query.sort);
//         pipeLine.push(sortStage)
//       }
//       if (req.query.page) {
//         const paginationStage = getPagination(req.query.page, req.query.limit);
//         pipeLine.push(...paginationStage)
//       }
//     }

//     pipeLine.push({
//       $lookup: {
//         from: "companies",
//         localField: "companyId",
//         foreignField: "_id",
//         as: "companyId",
//       },
//     },)
//     pipeLine.push({

//       "$unwind": {
//         "path": "$companyId",
//         "preserveNullAndEmptyArrays": true
//       }
//       ,
//     },)
//     console.log(pipeLine)
//     const a = await JobPost.aggregate(pipeLine);
//     res.status(200).json(a);
//   } catch (err) {
//     next(err);
//   }
// };

export const getAllJobPost1 = async (req, res, next) => {
  try {
    const rs = await JobPost.find(req.query).populate("companyId");
    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};

export const getAllJobPost = async (req, res, next) => {
  try {
    let rs;
    let queryLen = Object.keys(req.query).length;
    let titleQuery = "";
    let filterQuery = "";
    if (req.query && req.query.title) {
      titleQuery = req.query.title;
      req.query = filterSkipField(req.query, "title");
    }
    let cnt;
    if (queryLen > 0) {
      const queryTool = new QueryTool(
        JobPost.find({
          title: { $regex: new RegExp(titleQuery), $options: "i" },
        }).populate("companyId"),
        req.query
      ).filter();

      const page = req.query.page * 1 || 1;
      const limitNum = req.query.limit * 1 || 12;
      const skipNum = (page - 1) * limitNum;

      let frs = await queryTool.query;
      cnt = frs.length;
      rs = frs.slice(skipNum, skipNum + limitNum);
    } else {
      cnt = await JobPost.find().count();
      rs = await JobPost.find().populate("companyId").limit(12);
    }
    res.status(200).json({ jobsPage: rs, jobsCnt: cnt });
  } catch (err) {
    next(err);
  }
};

export const showAllJobPost = async (req, res, next) => {
  try {
    const allJobs = await JobPost.find().populate("companyId");
    console.log(allJobs.length)
    res.status(200).json({ jobsPage: allJobs });
  } catch (err) {
    next(err);
  }
};
