import { createError } from "../utils/errorUtil.js";
import JobPost from "../models/JobPost.js";
import Rec from "../models/Rec.js";
import Contact from "../models/contact.js";

export const getJobs = async (req, res, next) => {
  try {
    const loggedUserId = req.user.id;
    const hr = await JobPost.findOne({ userId: loggedUserId });
    if (!hr)
      return next(createError(400, "Tài khoản nhà tuyển dụng không tồn tại"));
    const jobByHr = await JobPost.aggregate([
      { $match: { recId: hr.id } },
      // {
      //   $lookup: {
      //     from: "contacts",
      //     localField: "_id",
      //     foreignField: "jobPostId",
      //     as: "contactList",
      //   },
      // },

      // {
      //   $group: {
      //     _id: "$contactList",
      //     numOfContact: { $sum: 1 },
          
      //   },
      // },
    ]);
    res.status(200).json(jobByHr);
  } catch (e) {
    next(e);
  }
};


// { $match: { recId: hr._id } },
// {
//   $lookup: {
//     from: "jobposts",
//     localField: "jobPostId",
//     foreignField: "_id",
//     as: "jobpostss",
//   },
// },

// {
//   $group: {
//     _id: "$jobpostss",
//     numOfJobs: { $sum: 1 },
    
//   },
// },