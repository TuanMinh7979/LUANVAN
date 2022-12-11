import { createError } from "../utils/errorUtil.js";
import Candidate from "../models/Candidate.js";
import Contact from "../models/contact.js";
import User from "../models/User.js"
import Resume from "../models/Resume.js";
import { getDecodedTokenData } from "../utils/TokenUtils.js";
import { filterSkipField } from "../utils/commonUtil.js";
import JobPost from "../models/JobPost.js";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
export const updateCandidateProfile = async (req, res, next) => {

  const { title,
    name,
    dob,
    gender,
    email,
    phone,
    addressId,
    fullAddress
  } = req.body;

  const {
    skills,
    aboutMe,
    objective,
    education,
    experience,
    activities,

    certifications,


    objectiveCv,
    educationCv,
    experienceCv,
    activitiesCv,

    certificationsCv

  } = req.body


  const profile = {
    skills,
    aboutMe,
    objective,
    education,
    experience,
    activities,
    certifications,
    objectiveCv,
    educationCv,
    experienceCv,
    activitiesCv,
    certificationsCv
  }
  let updateData = {
    title,
    name,
    dob,
    gender,
    email,
    phone,
    addressId: "1",
    fullAddress,
    profile
  }

  let loggedUserId = ""
  if (req.user) {

    loggedUserId = req.user.id;
  } else {

    const decodeTokenData = getDecodedTokenData(req)
    loggedUserId = decodeTokenData.id;
  }



  try {
    const updatedCandidate = await Candidate.findOneAndUpdate(
      { userId: loggedUserId },
      {
        $set: updateData,
      },
      { new: true }
      //return updated model
    );
    if (updatedCandidate === null)
      return next(createError(404, "Không tìm thấy ứng viên"));
    return res.status(200).json({ ...updatedCandidate._doc });
  } catch (e) {
    next(e);
  }
};

export const createResume = async (req, res, next) => {
  try {
    let loggedUserId = req.user.id

    const candidate = await Candidate.findOne({ userId: loggedUserId })
    if (!candidate || candidate == undefined) {
      return next(createError(404, "Ứng viên không tồn tại trong hệ thống"))
    }
    const newResume = new Resume({ ...req.body, candidateId: candidate.id });
    await newResume.save();

    let url = `${process.env.DJANGOSERVER}/updateCvsFile`
    const rs = await axios.get(url)
    console.log("update db success...")
    res.status(200).send("Tạo cv thành công");
  } catch (e) {
    console.log(e)
    next(e)

  }
};
export const getMyCV = async (req, res, next) => {
  try {
    let loggedUserId = req.params.id

    const candidate = await Candidate.findOne({ userId: loggedUserId })
    if (!candidate || candidate == undefined) {
      return next(createError(404, "Ứng viên không tồn tại trong hệ thống"))
    }


    const cv = await Resume.findOne({ candidateId: candidate.id });

    if (!cv || cv == undefined) {
      return next(createError(404, "Cv không tồn tại trong hệ thống"))
    }


    res.status(200).json({ cv });
  } catch (e) {
    next(e)
    // next(createError(400, "Tạo cv thất bại"));
  }
};



export const applyJob = async (req, res, next) => {
  //create a contact
  console.log("Vao day ung tuyen")
  try {
    //req: jobId, recId, resumeId, hrId
    const { jobId } = req.body;

    const loggedUser = req.user;


    const job = await JobPost.findById(jobId);

    const candidate = await Candidate.findOne({ userId: loggedUser.id });

    const resume = await Resume.findOne({ candidateId: candidate.id });
    let contact;
    if (resume) {
      contact = await Contact.create({
        jobPostId: jobId,
        recId: job.recId,
        candidateId: candidate._id,
        resumeId: resume._id,
      });
    } else {
      contact = await Contact.create({
        jobPostId: jobId,
        recId: job.recId,
        candidateId: candidate._id,
      });
    }

    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};