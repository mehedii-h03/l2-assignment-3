import { Router } from "express";
import {
  createBorrowRequest,
  getBorrowedSummary,
} from "../controllers/borrow.controller";

const router = Router();

router.post("/borrow", createBorrowRequest);
router.get("/borrow", getBorrowedSummary);

export const borrowRoutes = router;
