import jwt from "jsonwebtoken";
import { createError } from "./errorUtil.js";

export const checkToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(">>>Input token", token);
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
  //check xem token(hay user ) dang dang nhap vao co phai la user xem chi tiet vao path nay khong
  //neu phai thi moi cho cap nhat thong tin user

  //chi co user A va admin moi co the xoa duoc user A
  if (req.user.id.trim() === req.params.id.trim() || req.user.isAdmin) {
    return next();
  } else {
    return next(createError(403, `You are not user have id${req.params.id}`));
  }
};

export const checkAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    return next();
  } else {
    return next(createError(403, "You are not a admin"));
  }
};
