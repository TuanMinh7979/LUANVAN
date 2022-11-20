import Category from "../models/Category.js";
import { createError } from "../utils/errorUtil.js";
import { uploadImage } from "../utils/uploadUtil.js";
import { filterNotObj } from "../utils/commonUtil.js";
import Company from "../models/Company.js";
//

//category for job nha
export const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    let logoBase64 = req.body.logo;
    let notLogoFCom = filterNotObj(req.body.logo);
    const upRs = await uploadImage(req.body.data, "com999");
    const logo = upRs.secure_url;

    const newCompany = new Company(...notLogoFCom, logo);
    await newCompany.save();
    res.status(200).send("Company created successfully");
  } catch (e) {
    next(e);
  }
};
