import { z } from "zod";

// Create Borrow Schema
export const createBorrowSchema = z.object({
  book: z.string().min(1, "Book ID is required"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .positive("Quantity must be at least 1"),
  dueDate: z
    .string()
    .refine(
      (dateStr) => !isNaN(Date.parse(dateStr)),
      "Due date must be a valid date"
    ),
});

export type TCreateBorrow = z.infer<typeof createBorrowSchema>;
