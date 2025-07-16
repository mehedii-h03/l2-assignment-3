"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookSchema = exports.bookIdParamsSchema = exports.getAllBooksQuerySchema = exports.createBookSchema = void 0;
const zod_1 = require("zod");
// create book schema
exports.createBookSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    author: zod_1.z.string().min(1, "Author is required"),
    genre: zod_1.z.enum([
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
    ]),
    isbn: zod_1.z.string().min(1, "ISBN is required"),
    description: zod_1.z.string().optional(),
    copies: zod_1.z.number().int().nonnegative(),
    available: zod_1.z.boolean().optional(),
});
// get all books query schema
exports.getAllBooksQuerySchema = zod_1.z.object({
    filter: zod_1.z.string().optional(),
    sortBy: zod_1.z.enum(["createdAt", "title", "author"]).optional(),
    sort: zod_1.z.enum(["asc", "desc"]).optional(),
    limit: zod_1.z.string().regex(/^\d+$/, "Limit must be a number").optional(),
});
exports.bookIdParamsSchema = zod_1.z.object({
    bookId: zod_1.z.string().min(1, "Book ID is required"),
});
// update book schema
exports.updateBookSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    author: zod_1.z.string().optional(),
    genre: zod_1.z
        .enum([
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
    ])
        .optional(),
    isbn: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    copies: zod_1.z.number().int().nonnegative().optional(),
    available: zod_1.z.boolean().optional(),
});
