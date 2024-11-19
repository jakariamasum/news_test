import mongoose from "mongoose";
import { TSubCategory } from "./subcategory.interface";
import { SubCategory } from "./subcategory.model";

const createSubCategoryIntoDB = async (payload: TSubCategory) => {
  const result = await SubCategory.create(payload);
  return result;
};

const getSubCategoryFromDB = async () => {
  const result = await SubCategory.find({ type: "news", isDeleted: false });
  return result;
};
const getSubCategoryByCategoryFromDB = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await SubCategory.find({
    category: objectId,
    type: "news",
    isDeleted: false,
  });
  return result;
};
const getSubCategoryByLangFromDB = async (lang: string) => {
  let result;
  if (lang === "story" || lang === "video") {
    result = await SubCategory.find({ type: lang, isDeleted: false });
  } else {
    result = await SubCategory.find({ lang, type: "news", isDeleted: false });
  }
  return result;
};
const getVideoOrStoriesSubCategoryFromDB = async (type: string) => {
  const result = await SubCategory.find({ type: type, isDeleted: false });
  console.log(type, result);
  return result;
};

const updateSubCategoryIntoDB = async (
  id: string,
  payload: Partial<TSubCategory>
) => {
  const result = await SubCategory.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSubCategoryFromDB = async (id: string) => {
  const result = await SubCategory.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true }
  );
  return result;
};

export const SubCategoryServices = {
  createSubCategoryIntoDB,
  getSubCategoryFromDB,
  getSubCategoryByLangFromDB,
  getVideoOrStoriesSubCategoryFromDB,
  updateSubCategoryIntoDB,
  deleteSubCategoryFromDB,
  getSubCategoryByCategoryFromDB,
};
