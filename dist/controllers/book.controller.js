"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookById = exports.updateBookById = exports.getBookById = exports.getAllBooks = exports.createBook = void 0;
const book_model_1 = require("../models/book.model");
const book_validation_1 = require("../validations/book.validation");
// Create book
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsed = book_validation_1.createBookSchema.safeParse(req.body);
        console.log(parsed);
        if (!parsed.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                error: parsed.error.issues,
            });
        }
        const payload = Object.assign(Object.assign({}, parsed.data), { available: true });
        const book = yield book_model_1.Book.create(payload);
        res.json({
            success: true,
            message: "Book created successfully",
            data: book,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createBook = createBook;
// get all books
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy = "createdAt", sort = "desc", limit = "10", } = req.query;
        const query = {};
        if (typeof filter === "string") {
            query.genre = filter;
        }
        const limitNumber = parseInt(limit, 10) || 10;
        const sortOrder = sort === "asc" ? 1 : -1;
        const sortField = sortBy;
        const books = yield book_model_1.Book.find(query)
            .sort({ [sortField]: sortOrder })
            .limit(limitNumber);
        res.json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllBooks = getAllBooks;
// get book by Id
const getBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const book = yield book_model_1.Book.findById(bookId);
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
    }
    catch (error) {
        next(error);
    }
});
exports.getBookById = getBookById;
// update book
const updateBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const body = req.body;
        const updatedBook = yield book_model_1.Book.findByIdAndUpdate(bookId, body, {
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
    }
    catch (error) {
        next(error);
    }
});
exports.updateBookById = updateBookById;
// delete book
const deleteBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const book = yield book_model_1.Book.findByIdAndDelete(bookId);
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
    }
    catch (error) {
        next(error);
    }
});
exports.deleteBookById = deleteBookById;
