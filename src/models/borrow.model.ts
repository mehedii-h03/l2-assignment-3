import mongoose, { Schema, Document } from "mongoose";

interface BorrowDocument extends Document {
  book: mongoose.Types.ObjectId;
  quantity: number;
  dueDate: Date;
}

const borrowSchema = new Schema<BorrowDocument>(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least 1"],
      validate: {
        validator: Number.isInteger,
        message: "Quantity must be an integer",
      },
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Pre save middleware
borrowSchema.pre("save", function (next) {
  console.log(`Borrow record about to be saved for book ${this.book}`);
  next();
});

export const Borrow = mongoose.model<BorrowDocument>("Borrow", borrowSchema);
