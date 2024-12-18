import { Schema, model } from "mongoose";
import { TCategory, TVideo } from "./video.interface";

const CategorySchema = new Schema<TCategory>({
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  subCategory: { type: Schema.Types.Mixed, ref: "Subcategory" },
});

const VideoSchema = new Schema<TVideo>({
  title: { type: String, required: true },
  video: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: String, required: true }],
  category: { type: CategorySchema, required: true },
});

export const Video = model<TVideo>("Video", VideoSchema);
