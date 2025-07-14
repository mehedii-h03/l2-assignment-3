import { NextFunction, Request, Response } from "express";
import { Borrow } from "../models/borrow.model";

// post borrow request
export const createBorrowRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const data = await Borrow.create(body);

    res.json({
      success: true,
      message: "Book borrowed successfully",
      data: data,
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
