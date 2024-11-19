import { model, Schema } from "mongoose";
import { TSubCategory } from "./subcategory.interface";

const subCategorySchema = new Schema<TSubCategory>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  lang: {
    type: String,
    required: true,
  },
  type: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const SubCategory = model<TSubCategory>(
  "Subcategory",
  subCategorySchema
);
