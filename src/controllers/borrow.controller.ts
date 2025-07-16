import { NextFunction, Request, Response } from "express";
import { Borrow } from "../models/borrow.model";
import { Book } from "../models/book.model";

// post borrow request

export const createBorrowRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (book.copies < quantity) {
      return res.status(400).json({
        success: false,
        message: "Not enough copies available",
      });
    }

    book.copies -= quantity;
    await book.save();

    await Book.updateAvailability(bookId, book.copies);

    const borrow = await Borrow.create({
      book: bookId,
      quantity,
      dueDate,
    });

    res.json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    next(error);
  }
};

// get borrowed books summary
export const getBorrowedSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const borrowedSummary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookInfo",
        },
      },
      {
        $unwind: "$bookInfo",
      },
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookInfo.title",
            isbn: "$bookInfo.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: borrowedSummary,
    });
  } catch (error) {
    next(error);
  }
};
