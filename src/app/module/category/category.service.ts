import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getCategoriesFromDB = async (lang?: string) => {
  let result;
  if (lang === "all") {
    result = await Category.find({ isDeleted: false });
  } else {
    result = await Category.find({ type: "news", isDeleted: false });
  }
  return result;
};
const getCategoriesByLangFromDB = async (lang: string) => {
  console.log(lang);
  let result;
  if (lang === "all") {
    result = await Category.find({ type: "news", isDeleted: false });
  } else if (lang === "story" || lang === "video") {
    result = await Category.find({ type: lang, isDeleted: false });
  } else {
    result = await Category.find({ lang, type: "news", isDeleted: false });
  }
  return result;
};
const getVideoOrStoriesCategoryFromDB = async (type: string) => {
  const result = await Category.find({ type: type, isDeleted: false });
  return result;
};
const getSingleCategoryFromDB = async (id: string) => {
  const result = await Category.findOne({ _id: id });
  return result;
};
const updateCategoryIntoDB = async (
  id: string,
  payload: Partial<TCategory>
) => {
  const result = await Category.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteCategoryFromDB = async (id: string) => {
  const result = await Category.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const categoryServices = {
  createCategoryIntoDB,
  getCategoriesFromDB,
  getSingleCategoryFromDB,
  getCategoriesByLangFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
  getVideoOrStoriesCategoryFromDB,
};
