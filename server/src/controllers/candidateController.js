import { createError } from "../utils/errorUtil.js";
import Candidate from "../models/Candidate.js";
export const updateCandidateProfile = async (req, res, next) => {


  try {
    const updatedCandidate = await Candidate.findOneAndUpdate(
      { id: req.param.id },
      {
        $set: { profile: req.body },
      },
      { new: true }
      //return updated model
    );
    if (updatedCandidate === null)
      return next(createError(404, "Khong tim thay User roi"));
    return res.status(200).json({ ...updatedCandidate._doc });
  } catch (e) {
    next(e);
  }
};
