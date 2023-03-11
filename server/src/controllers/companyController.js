
import { createError } from "../utils/errorUtil.js";
import { uploadImage } from "../utils/uploadUtil.js";
import { filterSkipField } from "../utils/commonUtil.js";
import Company from "../models/Company.js";

export const getAllCompany = async (req, res, next) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (err) {
        next(err);
    }
};

export const createCompany = async (req, res, next) => {
    try {
        let logoBase64 = req.body.logo;
        let notLogoFCom = filterSkipField(req.body, "logo");

        const upRs = await uploadImage(logoBase64, "com999");
        const linkToLogo = upRs.secure_url;


        const newCompany = new Company({ ...notLogoFCom, linkToLogo });
        await newCompany.save();
        res.status(200).send("Tạo công ty thành công!");
    } catch (e) {
        next(e);
    }
};
