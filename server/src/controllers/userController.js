import User from "../models/User.js";
import { createError } from "../utils/errorUtil.js";
//
import Candidate from "../models/Candidate.js";
import Rec from "../models/Rec.js";
import { filterSkipField } from "../utils/commonUtil.js";

//check user before=> req.param.id = req.user.id
export const updateUser = async (req, res, next) => {
  req.body = filterSkipField(req.body, "roleInp", "passwordInp", "profile");
  try {
    const { detail, ...generalUser } = req.body;

    //khong cho cap nhat role
    let updatedUser;

    if (Object.keys(generalUser).length > 0) {
      updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: generalUser,
        },
        { new: true }
      );
    } else {
      updatedUser = await User.findById(req.params.id);
    }

    if (updatedUser === null)
      return next(createError(404, "Không tìm thấy user rồi"));

    let updatedUserDetail = {};
    if (updatedUser.role !== "admin") {
      try {
        if (updatedUser.role == "candidate") {
          updatedUserDetail = await Candidate.findOneAndUpdate(
            { userId: updatedUser._id },
            {
              $set: detail,
            },
            { new: true }
            //return updated model
          );
        } else if (updatedUser.role == "rec") {
          updatedUserDetail = await Rec.findOneAndUpdate(
            { userId: updatedUser._id },
            {
              $set: detail,
            },
            //return updated model
            { new: true }
          );
        }
      } catch (e) {
        next(e);
      }
    }

    //doi voi user la admin thi return o day
    return res
      .status(200)
      .json({ ...updatedUser._doc, detail: updatedUserDetail._doc });
  } catch (err) {
    next(createError(400, "Cập nhật user thất bại"));
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser === null)
      return next(createError(404, "Không tìm thấy user rồi"));

    if (deletedUser.role !== "admin") {
      try {
        if (deletedUser.role === "candidate") {
          let deletedCandidate = await Candidate.deleteOne({
            userId: req.params.id,
          });
        } else if (deletedUser.role === "rec") {
          let deletedRec = await Rec.deleteOne({
            userId: req.params.id,
          });
        }
      } catch (e) {
        next(e);
      }
    }

    return res.status(200).json("User deleted");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user === null) return next(createError(404, "Khong tim thay User"));
    let userDetail = {};
    try {
      if (user.role === "candidate") {
        let candidate = await Candidate.findOne({ userId: user._id });
   
        let candidateProfile = candidate.profile;
         userDetail = { ...candidate._doc, ...candidateProfile };
      } else if (user.role === "rec") {
        userDetail = await Rec.findOne({ userId: user._id });
      }
    } catch (e) {
      console.log(e);
      next(e);
    }
 
    res.status(200).json({ ...user._doc, ...userDetail._doc });
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({ role: { $ne: "admin" } });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
