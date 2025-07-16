import mongoose, { Schema } from "mongoose";
import { TCreateBook } from "../validations/book.validation";

const bookSchema = new Schema<TCreateBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: { type: String, required: true, trim: true, unique: true },
    description: { type: String, trim: true },
    copies: { type: Number, required: true, min: 0 },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);

// TODO
// need to add static method
// pre post method
// Video Explanation
