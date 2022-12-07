import Contact from "../models/contact.js";
import JobPost from "../models/JobPost.js";
import Resume from "../models/Resume.js";
import Candidate from "../models/Candidate.js";
import { createError } from "../utils/errorUtil.js";

export const getAllContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};

