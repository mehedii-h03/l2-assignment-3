"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoutes = void 0;
const express_1 = require("express");
const borrow_controller_1 = require("../controllers/borrow.controller");
const router = (0, express_1.Router)();
router.post("/borrow", borrow_controller_1.createBorrowRequest);
router.get("/borrow", borrow_controller_1.getBorrowedSummary);
exports.borrowRoutes = router;
