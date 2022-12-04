import { createError } from "../utils/errorUtil.js";
import Candidate from "../models/Candidate.js";
import User from "../models/User.js"
import Resume from "../models/Resume.js";
import { getDecodedTokenData } from "../utils/TokenUtils.js";

export const updateCandidateProfile = async (req, res, next) => {

  const { title,
    name,
    dob,
    gender,
    email,
    phone,
    addressId,
    fullAddress
  } = req.body;

  const {
    skills,
    aboutMe,
    objective,
    education,
    experience,
    activities,

    certifications,


    objectiveCv,
    educationCv,
    experienceCv,
    activitiesCv,

    certificationsCv

  } = req.body


  const profile = {
    skills,
    aboutMe,
    objective,
    education,
    experience,
    activities,
    certifications,
    objectiveCv,
    educationCv,
    experienceCv,
    activitiesCv,
    certificationsCv
  }
  let updateData = {
    title,
    name,
    dob,
    gender,
    email,
    phone,
    addressId: "1",
    fullAddress,
    profile
  }





  console.log("_______________________?????")
  console.log(updateData)
  let loggedUserId = ""
  if (req.user) {

    loggedUserId = req.user.id;
  } else {

    const decodeTokenData = getDecodedTokenData(req)
    loggedUserId = decodeTokenData.id;
  }


  console.log(loggedUserId)
  try {
    const updatedCandidate = await Candidate.findOneAndUpdate(
      { userId: loggedUserId },
      {
        $set: updateData,
      },
      { new: true }
      //return updated model
    );
    if (updatedCandidate === null)
      return next(createError(404, "Không tìm thấy ứng viên"));
    return res.status(200).json({ ...updatedCandidate._doc });
  } catch (e) {
    next(e);
  }
};

export const createResume = async (req, res, next) => {
  try {
    let loggedUserId = req.user.id
    console.log("____________", loggedUserId)
    const candidate = await Candidate.findOne({ userId: loggedUserId })
    if (!candidate || candidate == undefined) {
      return next(createError(400, "Ứng viên không tồn tại trong hệ thống"))
    }
    console.log("<<<<<<<<<<", candidate.id)
    const newResume = new Resume({ ...req.body, candidateId: candidate.id });

    await newResume.save();
    res.status(200).json({ status: 200, message: "Tạo cv thành công" });
  } catch (e) {
    console.log(e)
    next(e)
    // next(createError(400, "Tạo cv thất bại"));
  }
};
