import { Types } from "mongoose";

export type TSubCategory = {
  title: string;
  description?: string;
  category: Types.ObjectId;
  img?: string;
  lang: string;
  type: string;
  isDeleted: boolean;
};
