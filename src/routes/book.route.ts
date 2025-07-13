import express from "express";
import {
  createBook,
  deleteBookById,
  getBooks,
  updateBookById,
} from "../controllers/book.controller";

export const bookRoutes = express.Router();

bookRoutes.post("/books", createBook);
bookRoutes.get("/books", getBooks);
bookRoutes.get("/books/:bookId", getBooks);
bookRoutes.patch("/books/:bookId", updateBookById);
bookRoutes.delete("books/:bookId", deleteBookById);
