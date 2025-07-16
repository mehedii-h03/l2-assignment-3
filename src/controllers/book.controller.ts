import { NextFunction, Request, Response } from "express";
import { Book } from "../models/book.model";
import { createBookSchema } from "../validations/book.validation";

// Create book
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsed = createBookSchema.safeParse(req.body);
    console.log(parsed);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        error: parsed.error.issues,
      });
    }
    const payload = { ...parsed.data, available: true };
    const book = await Book.create(payload);

    res.json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// get all books
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = "10",
    } = req.query;

    const query: { genre?: string } = {};

    if (typeof filter === "string") {
      query.genre = filter;
    }

    const limitNumber = parseInt(limit as string, 10) || 10;

    const sortOrder = sort === "asc" ? 1 : -1;

    const sortField = sortBy as string;

    const books = await Book.find(query)
      .sort({ [sortField]: sortOrder })
      .limit(limitNumber);

    res.json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

// get book by Id
export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.bookId;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

// update book
export const updateBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.bookId;
    const body = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookId, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
      });
    }

    res.json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    next(error);
  }
};

// delete book
export const deleteBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findByIdAndDelete(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
      });
    }
    res.json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
