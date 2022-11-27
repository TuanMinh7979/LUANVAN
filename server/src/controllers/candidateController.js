import { createError } from "../utils/errorUtil.js";
import Candidate from "../models/Candidate.js";
export const updateCandidateProfile = async (req, res, next) => {


  try {
    const updatedCandidate = await Candidate.findOneAndUpdate(
      { id: req.param.id },
      {
        $set: req.body,
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
