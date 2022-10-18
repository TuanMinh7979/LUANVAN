import jwt from "jsonwebtoken";
import { createError } from "./errorUtil.js";

export const checkToken = (req, res, next) => {
  // console.log( req.cookies);
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Authenticated failed"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return next(createError(403, "Authenticated failed2"));
    req.user = payload;
    return next();
  });
};
//
export const checkUser = (req, res, next) => {
  if (req.user.id.trim() === req.params.id.trim() || req.user.isAdmin) {
    return next();
  } else {
    return next(createError(403, "You are not authorized!"));
  }
};

export const checkAdmin = (req, res, next) => {
  console.log(">>>>>>>payload user store in request req.user", req.user);
  if (req.user.isAdmin) {
    return next();
  } else {
    return next(createError(403, "You are not a admin"));
  }
};
