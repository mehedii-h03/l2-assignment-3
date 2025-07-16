"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBorrowSchema = void 0;
const zod_1 = require("zod");
// Create Borrow Schema
exports.createBorrowSchema = zod_1.z.object({
    book: zod_1.z.string().min(1, "Book ID is required"),
    quantity: zod_1.z
        .number()
        .int("Quantity must be an integer")
        .positive("Quantity must be at least 1"),
    dueDate: zod_1.z
        .string()
        .refine((dateStr) => !isNaN(Date.parse(dateStr)), "Due date must be a valid date"),
});
