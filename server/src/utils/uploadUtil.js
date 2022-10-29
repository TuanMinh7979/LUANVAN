import { createError } from "./errorUtil.js";
import cloudinary from "./cloudinary.js";
export const uploadImage = async (imageStr) => {
  return await cloudinary.uploader.upload(imageStr, {
    upload_preset: "kkk111",
  });
};
