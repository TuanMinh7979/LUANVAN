import { Rank, SalaryType, WorkExp, WorkType } from "../models/CodeModels.js";
import { createError } from "../utils/errorUtil.js";

// salaryType
export const createASalaryType = async (req, res, next) => {
    try {
        const salaryType = new SalaryType(req.body)
        await salaryType.save();
      
        res.status(200).json(salaryType);
    } catch (err) {
        next(err);
    }
};
// salaryType

// rank
export const createARank = async (req, res, next) => {
    try {
        const rank = new Rank(req.body)
        await rank.save();
        res.status(200).json(rank);
    } catch (err) {
        next(err);
    }
};
// rank

// workType
export const createAWorkType = async (req, res, next) => {
    try {
        const workType = new WorkType(req.body)
        await workType.save();
        res.status(200).json(workType);
    } catch (err) {
        next(err);
    }
};
// workType
// workType
export const createAWorkExp = async (req, res, next) => {
    try {
        const workExp = new WorkExp(req.body)
        await workExp.save();
        res.status(200).json(workExp);
    } catch (err) {
        next(err);
    }
};
// workType