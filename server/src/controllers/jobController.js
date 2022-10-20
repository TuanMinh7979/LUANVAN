import { createError } from "../utils/errorUtil.js";
import Job from "../models/Job.js";
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

//Tam thoi the da phan trang se lam sau
export const getAllJob = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    next(err);
  }
};
