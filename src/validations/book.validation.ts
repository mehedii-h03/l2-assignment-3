import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "author is required"),
  genre: z.enum([
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ]),
  isbn: z.string().min(1, "isbn is required"),
  description: z.string().optional(),
  copies: z.number().int().nonnegative(),
  available: z.boolean().optional(),
});

export type TBook = z.infer<typeof createBookSchema>;
