import { createError } from "../utils/errorUtil.js";
import Candidate from "../models/Candidate.js";
export const updateCandidateProfile = async (req, res, next) => {
  const userToUpdate = await User.findById(req.params.id);
  if (userToUpdate === null)
    return next(createError(404, "Khong tim thay User roi"));
  try {
    const updatedCandidate = await Candidate.findOneAndUpdate(
      { userId: userToUpdate._id },
      {
        $set: { profile: req.body },
      },
      { new: true }
      //return updated model
    );

    return res.status(200).json({ ...updatedProfile._doc });
  } catch (e) {
    next(e);
  }
};
