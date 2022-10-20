import { createError } from "../utils/errorUtil.js";
import Job from "../models/Job.js";
import QueryTool from "../utils/queryTool.js";
export const createJob = async (req, res, next) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(200).send("job created successfully");
  } catch (e) {
    next(e);
  }
};
export const updateJob = async (req, res, next) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (updatedJob === null)
      return next(createError(404, "Khong tim thay Job roi"));

    return res.status(200).json(updatedJob);
  } catch (err) {
    next(err);
  }
};
export const deleteJob = async (req, res, next) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (deletedJob === null)
      return next(createError(404, "Khong tim thay Job roi"));

    return res.status(200).json("Job deleted");
  } catch (err) {
    next(err);
  }
};

export const getJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job === null) return next(createError(404, "Khong tim thay Job"));

    res.status(200).json(job);
  } catch (err) {
    next(err);
  }
};

//find all va phan trang

//phan trang thi tham so page va limit
//filter: age[gt]=10, age bigger than 10, hoac age=-1 tuc la khong lay thong tin age
//sort : sort=age, sort theo tuoi tang dan hoac sort=-age theo tuoi giam dan

export const getAllJob = async (req, res, next) => {
  try {
    let rs;

    if (Object.keys(req.query).length >= 0) {
      console.log("____________________)__))_)");
      const queryTool = new QueryTool(Job.find(), req.query)
        .filter()
        .sort()
        .paginate();

      rs = await queryTool.query;
    } else {
      rs = await Job.find();
    }

    res.status(200).json(rs);
  } catch (err) {
    next(err);
  }
};

//PHAN TRANG
