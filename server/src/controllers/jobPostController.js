import { createError } from "../utils/errorUtil.js";
import JobPost from "../models/JobPost.js";
import QueryTool from "../utils/queryTool.js";
import { getDecodedTokenData } from "../utils/TokenUtils.js";

export const createJobPost = async (req, res, next) => {
  try {

    let recId = ""
    if (req.user) {
      //use in app
      recId = req.user.id;
    } else {
      //use in postman
      const decodeTokenData = getDecodedTokenData(req)
      recId = decodeTokenData.id;
    }

    let newJobPost = new JobPost({ ...req.body, recId });

    await newJobPost.save();
    res.status(200).send("jobpost created successfully");
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
    const jobPost = await JobPost.findById(req.params.id);
    if (jobPost === null)
      return next(createError(404, "Khong tim thay jobPost"));

    res.status(200).json(jobPost);
  } catch (err) {
    next(err);
  }
};



export const getAllJobPost = async (req, res, next) => {
  try {
    const a = await JobPost.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
    ]);

    res.status(200).json(a);
  } catch (err) {
    next(err);
  }
};



// { "$toObjectId": "$userId" }
export const testA = async (req, res, next) => {
  try {

    const a = await JobPost.aggregate([
      { $addFields: { "companyOId": { "$toString": "$companyId" } } },
      { $match: { "amount": { "$lt": "2" } } },
      {
        $lookup: {
          from: "companies",
          localField: "companyOId",
          foreignField: "_id",
          as: "company",
        },
      },

      { $skip: 1 },
      { $limit: 1 },
    ]);

    console.log(a);
    res.status(200).json(a);
  } catch (err) {
    next(err);
  }
};

export const getAllJobPost1 = async (req, res, next) => {
  try {
    let rs;

    if (Object.keys(req.query).length >= 0) {
      const queryTool = new QueryTool(JobPost.find(), req.query)
        .filter()
        .sort()
        .paginate();

      rs = await queryTool.query;
    } else {
      rs = await JobPost.find();
    }

    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};
