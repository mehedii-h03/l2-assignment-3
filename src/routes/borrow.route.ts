import express from "express";
import {
  createBorrowRequest,
  getBorrowedSummary,
} from "../controllers/borrow.controller";

export const borrowRoutes = express.Router();

borrowRoutes.post("/borrow", createBorrowRequest);
borrowRoutes.get("/borrow", getBorrowedSummary);
