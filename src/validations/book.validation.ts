import { z } from "zod";

// create book schema
export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.enum([
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ]),
  isbn: z.string().min(1, "ISBN is required"),
  description: z.string().optional(),
  copies: z.number().int().nonnegative(),
  available: z.boolean().optional(),
});

export type TCreateBook = z.infer<typeof createBookSchema>;

// get all books query schema
export const getAllBooksQuerySchema = z.object({
  filter: z.string().optional(),
  sortBy: z.enum(["createdAt", "title", "author"]).optional(),
  sort: z.enum(["asc", "desc"]).optional(),
  limit: z.string().regex(/^\d+$/, "Limit must be a number").optional(),
});

export type TGetAllBooksQuery = z.infer<typeof getAllBooksQuerySchema>;

export const bookIdParamsSchema = z.object({
  bookId: z.string().min(1, "Book ID is required"),
});

export type TBookIdParams = z.infer<typeof bookIdParamsSchema>;

// update book schema
export const updateBookSchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  genre: z
    .enum([
      "FICTION",
      "NON_FICTION",
      "SCIENCE",
      "HISTORY",
      "BIOGRAPHY",
      "FANTASY",
    ])
    .optional(),
  isbn: z.string().optional(),
  description: z.string().optional(),
  copies: z.number().int().nonnegative().optional(),
  available: z.boolean().optional(),
});

export type TUpdateBook = z.infer<typeof updateBookSchema>;
