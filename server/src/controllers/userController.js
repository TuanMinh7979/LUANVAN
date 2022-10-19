import User from "../models/User.js";
import { createError } from "../utils/errorUtil.js";
//
import Applicant from "../models/Applicant.js";
import Rec from "../models/Rec.js";
export const updateUser = async (req, res, next) => {
  try {
    const { usernameInp, emailInp, nameInp, addressInp, ...details } = req.body;

    //khong cho cap nhat role
    const generalUser = {
      username: usernameInp,
      email: emailInp,
      name: nameInp,
      address: addressInp,
    };
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: generalUser,
      },
      //return updated model
      { new: true }
    );

    if (updatedUser === null)
      return next(createError(404, "Deo tim thay User roi"));

    const updatedUserDetail = {};
    if (updatedUser.role !== "admin") {
      try {
        if (updatedUser.role == "applicant") {
          userDetail = await Applicant.findByIdAndUpdate(
            req.params.id,
            {
              $set: details,
            },
            //return updated model
            { new: true }
          );
        } else if (updatedUser.role == "rec") {
          userDetail = await Rec.findByIdAndUpdate(
            req.params.id,
            {
              $set: details,
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
    return res.status(200).json(...updatedUser, ...updatedUserDetail);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (deletedUser.role !== "admin") {
      try {
        if (deletedUser.role === "applicant") {
          let deletedApplicant = await Applicant.deleteOne({
            user_id: req.params.id,
          });
        } else if (deletedUser.role === "rec") {
          let deletedRec = await Rec.deleteOne({
            user_id: req.params.id,
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
    const userDetail = {};
    try {
      if (user.role === "applicant") {
        userDetail = await Applicant.find({ user_id: user._id });
      } else if (user.role === "rec") {
        userDetail = await Rec.find({ user_id: user._id });
      }
    } catch (e) {
      next(e);
    }

    res.status(200).json(...user, ...userDetail);
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({ $ne: { role: "amdin" } });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
