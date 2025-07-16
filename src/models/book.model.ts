import mongoose, { Schema, Model } from "mongoose";
import { TCreateBook } from "../validations/book.validation";

interface BookDocument extends TCreateBook, mongoose.Document {}
interface BookModel extends Model<BookDocument> {
  updateAvailability(bookId: string, copies: number): Promise<void>;
}

const bookSchema = new Schema<BookDocument>(
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
    available: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

bookSchema.statics.updateAvailability = async function (
  bookId: string,
  copies: number
) {
  const isAvailable = copies > 0;
  await this.findByIdAndUpdate(bookId, { available: isAvailable });
};

export const Book = mongoose.model<BookDocument, BookModel>("Book", bookSchema);

// TODO
// Video Explanation
