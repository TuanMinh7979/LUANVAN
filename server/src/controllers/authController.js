import User from "../models/User.js";
import { createError } from "../utils/errorUtil.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Candidate from "../models/Candidate.js";
import Rec from "../models/Rec.js";
import Resume from "../models/Resume.js";
import { filterSkipField } from "../utils/commonUtil.js";
export const register = async (req, res, next) => {
  try {
    const { usernameInp, passwordInp, roleInp, ...details } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(passwordInp, salt);
    const newUser = new User({
      username: usernameInp,
      role: roleInp,
      password: hash,
    });
    if (roleInp == "admin") newUser.isAdmin = true;

    let savedUser = await newUser.save();
    if (roleInp !== "admin") {
      try {
        if (roleInp == "candidate") {
          const newCandidate = new Candidate({
            userId: savedUser._id,
            ...details,
          });

          await newCandidate.save();
        } else if (roleInp == "rec") {
          const newRec = new Rec({
            userId: savedUser._id,
            ...details,
          });
          await newRec.save();
        }
      } catch (e) {
        next(e);
      }
    }

    res.status(200).json("Tạo tài khoản thành công");
  } catch (err) {
    console.log(err);
    next(createError(400, "Tạo tài khoản thất bại"));
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(400, "Sai tên đăng nhập hoặc mật khẩu"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(
        createError(400, "Sai tên đăng nhập hoặc mật khẩu(password)")
      );

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    let resUser = user._doc;
    if (user.role == "rec") {
      const recDetail = await Rec.findOne({ userId: user._id }).select({
        _id: 0
      });
      resUser = { ...resUser, ...recDetail._doc };
    } else if (user.role == "candidate") {

      let candidate = await Candidate.findOne({ userId: user._id }).select({
        _id: 0,
      });
      resUser = { ...resUser, ...candidate._doc };
    }

    delete resUser.password;
    console.log("___+++", resUser)
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      }).json(resUser);
  } catch (err) {
    console.log(err)
    return next(createError(400, "Đăng nhập thất bại"));
  }
};
