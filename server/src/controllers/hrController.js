import { createError } from "../utils/errorUtil.js";
import JobPost from "../models/JobPost.js";
import Rec from "../models/Rec.js";

export const getJobs = async(req, res, next) => {
    try {
        const loggedUserId = req.user.id;
        const hr = await Rec.findOne({ userId: loggedUserId })
        if (!hr) return next(
            createError(400, "Tài khoản nhà tuyển dụng không tồn tại")
        );
        const jobByHr = await JobPost.find({ recId: hr.id })
        res.status(200).json(jobByHr);
    } catch (e) {
        next(e);
    }
}
