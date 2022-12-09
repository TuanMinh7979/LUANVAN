import mongoose from "mongoose";
const { Schema } = mongoose;
//Rank
const RankSchema = new Schema(
  {
    title: { type: String, required: true },
  },

  { timestamps: true }
);

export const Rank = mongoose.model("ranks", RankSchema);

//SalaryType
const SalaryTypeSchema = new Schema(
  {
    title: { type: String, required: true },
  },

  { timestamps: true }
);

export const SalaryType = mongoose.model("salarytypes", SalaryTypeSchema);

//WorkExp
const WorkExpSchema = new Schema(
  {
    title: { type: String, required: true },
  },

  { timestamps: true }
);

export const WorkExp = mongoose.model("workexps", WorkExpSchema);


//WorkType
const WorkTypeSchema = new Schema(
  {
    title: { type: String, required: true },
  },

  { timestamps: true }
);

export const WorkType = mongoose.model("worktypes", WorkTypeSchema);

