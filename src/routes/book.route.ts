import express from "express";
import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller";

export const bookRoutes = express.Router();

bookRoutes.post("/books", createBook);
bookRoutes.get("/books", getAllBooks);
bookRoutes.get("/books/:bookId", getBookById);
bookRoutes.patch("/books/:bookId", updateBookById);
bookRoutes.delete("/books/:bookId", deleteBookById);
