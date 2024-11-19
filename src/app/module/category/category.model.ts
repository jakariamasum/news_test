import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const CategorySchema = new Schema<TCategory>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    lang: { type: String, required: true },
    img: { type: String },
    position: { type: Number },
    type: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Category = model<TCategory>("Category", CategorySchema);
