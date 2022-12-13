import { createError } from "../utils/errorUtil.js";
import Candidate from "../models/Candidate.js";
import Contact from "../models/contact.js";
import User from "../models/User.js";
import Resume from "../models/Resume.js";
import { getDecodedTokenData } from "../utils/TokenUtils.js";
import { filterSkipField } from "../utils/commonUtil.js";
import JobPost from "../models/JobPost.js";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { uploadImage } from "../utils/uploadUtil.js";
export const updateCandidateProfile = async (req, res, next) => {
  //for candidate
  const { avatar } = req.body;
  const { title, name, dob, gender, email, phone, addressId, fullAddress } =
    req.body;
  //for candidate.profile
  const {
    aboutMe,

    skills,
    objective,
    education,
    experience,
    activities,
    certifications,

    objectiveCv,
    educationCv,
    experienceCv,
    skillsCv,
    activitiesCv,
    certificationsCv,
  } = req.body;

  const profile = {
    aboutMe,

    objective,
    education,
    experience,
    skills,
    activities,
    certifications,

    objectiveCv,
    educationCv,
    experienceCv,
    skillsCv,
    activitiesCv,
    certificationsCv,
  };
  let candidateData = {
    title,
    name,
    dob,
    gender,
    email,
    phone,
    addressId,
    fullAddress,
    profile,
  };

  let loggedUserId = "";
  if (req.user) {
    loggedUserId = req.user.id;
  } else {
    const decodeTokenData = getDecodedTokenData(req);
    loggedUserId = decodeTokenData.id;
  }

  try {
    let avatarLink = "";
    if (gender == "Nam") {
      avatarLink =
        "https://res.cloudinary.com/djnekmzdf/image/upload/v1670878877/ifo/maledefault_fechep.jpg";
    } else {
      avatarLink =
        "https://res.cloudinary.com/djnekmzdf/image/upload/v1670878938/ifo/74182470-default-female-avatar-profile-picture-icon-grey-woman-photo-placeholder-vector-illustration_iu7kdj.webp";
    }
    if (avatar) {
      const upRs = await uploadImage(avatar, "ifo999");
      avatarLink = upRs.secure_url;
    }

    const updatedCandidate = await Candidate.findOneAndUpdate(
      { userId: loggedUserId },
      {
        $set: { ...candidateData, avatar: avatarLink },
      },
      { new: true }
    );
    if (!updatedCandidate) {
      return next(createError(404, "Không tìm thấy ứng viên"));
    }

    return res.status(200).json({ ...updatedCandidate._doc });
  } catch (e) {
    next(e);
  }
};

export const createResume = async (req, res, next) => {
  try {
    let loggedUserId = req.user.id;
    const loggedUser = await User.findOne({ userId: req.user.id });
    if (!loggedUser || loggedUser == undefined) {
      return next(createError(404, "Ứng viên không tồn tại trong hệ thống"));
    }
    const candidate = await Candidate.findOne({ userId: loggedUserId });
    const oldResume = await Resume.findOne({ candidateId: candidate._id });
    let savedResume;
    if (oldResume) {
      //updated old Cv

      savedResume = await Resume.findOneAndUpdate(
        { candidateId: candidate._id },
        { $set: { ...req.body } },
        { new: true }
      );
    } else {
      //create new Cv
      let resumeToSave = new Resume({
        ...req.body,
        candidateId: candidate._id,
      });
      savedResume = await resumeToSave.save();
    }
    let url = `${process.env.DJANGOSERVER}/updateCvsFile`;
    console.log("-----------==============",url)
    const rs = await axios.get(url);
    console.log("update db success...");

    const candidateDetail = {
      ...candidate._doc,
      activeCvId: savedResume._id,
    };

    //DAY LA KHUON MAU DE TRA VE THONG TIN DE LUU VAO REDUX
    res.status(200).json({ ...loggedUser._doc, detail: candidateDetail });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
export const getMyCV = async (req, res, next) => {
  try {
    let loggedUserId = req.params.id;

    const candidate = await Candidate.findOne({ userId: loggedUserId });
    if (!candidate || candidate == undefined) {
      return next(createError(404, "Ứng viên không tồn tại trong hệ thống"));
    }

    const cv = await Resume.findOne({ candidateId: candidate.id });

    if (!cv || cv == undefined) {
      return next(createError(404, "Cv không tồn tại trong hệ thống"));
    }

    res.status(200).json({ cv });
  } catch (e) {
    next(e);
    // next(createError(400, "Tạo cv thất bại"));
  }
};

export const applyJob = async (req, res, next) => {
  //create a contact

  try {
    //req: jobId, recId, resumeId, hrId
    const { jobId } = req.body;
    console.log(req.user);
    const loggedUser = await User.findById(req.user.id);
    if (!loggedUser) return next(createError(400, "Không tìm thấy user"));
    const job = await JobPost.findById(jobId);
    const candidate = await Candidate.findOneAndUpdate(
      { userId: loggedUser.id },
      { $push: { applyJobs: job._id } },
      { new: true }
    );

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
    console.log({ ...loggedUser._doc, detail: candidate });
    res.status(200).json({ ...loggedUser._doc, detail: candidate });
  } catch (err) {
    next(err);
  }
};
