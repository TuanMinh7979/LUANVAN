import { createError } from "../utils/errorUtil.js";
import JobPost from "../models/JobPost.js";
import QueryTool from "../utils/queryTool.js";
export const createJobPost = async (req, res, next) => {
  try {
    const newJobPost = new JobPost(req.body);
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

//find all va phan trang

//phan trang thi tham so page va limit
//filter: age[gt]=10, age bigger than 10, hoac age=-1 tuc la khong lay thong tin age
//sort : sort=age, sort theo tuoi tang dan hoac sort=-age theo tuoi giam dan

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

/////test
export const testA = async (req, res, next) => {
  try {
    console.log("_________________TEST");
    const a = await JobPost.aggregate([
      { $match: {"amount":{"$lt":"2"}} },
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
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
