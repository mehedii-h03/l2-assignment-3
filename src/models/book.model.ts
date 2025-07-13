import mongoose, { Schema } from "mongoose";
import { TBook } from "../validations/book.validation";

const bookSchema = new Schema<TBook>(
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
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);
