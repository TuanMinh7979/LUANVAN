
import Address from "../models/Address.js";
import { createError } from "../utils/errorUtil.js";



export const getAllAddress = async (req, res, next) => {
  try {
    const allAddress = await Address.find();
    res.status(200).json(allAddress);
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
