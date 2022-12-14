import Resume from "../models/Resume.js";
import Category from "../models/Resume.js";
import { createError } from "../utils/errorUtil.js";
import { filterSkipField } from "../utils/commonUtil.js";

export const getAllResume = async (req, res, next) => {
  try {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
  } catch (err) {
    next(err);
  }
};
export const getByCharacterInField = async (req, res, next) => {

  try {
    const findArray = []
    let searchParam = req.body
    let searchKw = searchParam.keyword || "";
    let searchAddress = searchParam.address || "";
    searchParam = filterSkipField(searchParam, "keyword", "address", "activities", "education")
    for (let k in searchParam) {
      if (searchParam[k]) {
        findArray.push({ [k]: new RegExp(searchKw, 'i') })
      }
    }
    console.log(findArray)
    const data = await Resume.find({ $or: findArray })
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};



export const viewCv = async (req, res, next) => {
  try {
    let cvId = req.params.id;
    const cv = await Resume.findById(cvId);
    if (!cv) {
      return next(createError(404, "Cv không tồn tại trong hệ thống"));
    }
    res.status(200).json({ cv });
  } catch (e) {
    next(e);

  }
};


