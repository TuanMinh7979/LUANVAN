
import Address from "../models/Address.js";
import { createError } from "../utils/errorUtil.js";
//

//category for job nha
export const getAllAddress = async (req, res, next) => {
  try {
    const address = await Address.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};
export const createAddress = async (req, res, next) => {
  try {
    const address = new Address(req.body)
    await address.save();
    res.status(200).json(address);
  } catch (err) {
    next(err);
  }
};
