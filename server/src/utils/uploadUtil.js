import { createError } from "./errorUtil.js";
import cloudinary from "./cloudinary.js";
export const uploadImage = async (imageStr) => {
  let rs = await cloudinary.uploader.upload(imageStr, {
    upload_preset: "ifo999",
  });
  console.log("_________________RS", rs);
  return rs;
};
