import { Router } from "express";
import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller";

const router = Router();

router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:bookId", getBookById);
router.patch("/books/:bookId", updateBookById);
router.delete("/books/:bookId", deleteBookById);

export const bookRoutes = router;
