import { createError } from "../utils/errorUtil.js";
import JobPost from "../models/JobPost.js";
import Rec from "../models/Rec.js";
import Contact from "../models/contact.js";
import Candidate from "../models/Candidate.js";
import mongoose from "mongoose";

export const getJobs = async (req, res, next) => {

  try {
    const loggedUserId = req.user.id;
    const hr = await Rec.findOne({ userId: loggedUserId });
    console.log(hr);
    if (!hr)
      return next(createError(400, "Tài khoản nhà tuyển dụng không tồn tại"));
    const jobByHr = await JobPost.aggregate([
      { $match: { recId: hr._id } },
      {
        $lookup: {
          from: "contacts",
          localField: "_id",
          foreignField: "jobPostId",
          as: "contactList",
        },
      },
      { $addFields: { contactCnt: { $size: "$contactList" } } },
    ]);
    res.status(200).json(jobByHr);
  } catch (e) {
    next(e);
  }
};


export const getJobAppliedCandidates = async (req, res, next) => {

  const ObjectId = mongoose.Types.ObjectId;
  try {
    const loggedUserId = req.user.id;
    const job = await JobPost.findById(req.params.jobPostId);

    const candidates = await Candidate.aggregate([

      {
        $lookup: {
          from: "contacts",
          localField: "_id",
          foreignField: "candidateId",
          as: "contactList",
        },
      },
      { $unwind: "$contactList" },
      {
        $match: {
          "contactList.jobPostId": ObjectId(req.params.jobPostId)
        }

      }
    ]);

    res.status(200).json(candidates);
  } catch (e) {
    next(e);
  }
};
