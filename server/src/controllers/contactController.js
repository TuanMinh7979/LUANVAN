import Contact from "../models/contact.js";
import JobPost from "../models/JobPost.js";
import { createError } from "../utils/errorUtil.js";

//
export const getAllContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};
export const createAContact = async (req, res, next) => {
  try {
    const { jobId } = req.body;
    const loggedUser = req.user;
    const job = await JobPost.findById(jobId);

    console.log(job);
    console.log("................>>");
    const jobf = await job.populate("recId");
    console.log("................><>");
    console.log(jobf);
   
    res.status(200).json("");
  } catch (err) {
    next(err);
  }
};
