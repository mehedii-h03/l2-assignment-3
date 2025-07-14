import mongoose, { Schema } from "mongoose";

const borrowSchema = new Schema(
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
      dueDate: {
        type: Date,
        required: true,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Borrow = mongoose.model("Borrow", borrowSchema);
