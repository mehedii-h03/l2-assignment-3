"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_route_1 = require("./routes/book.route");
const borrow_route_1 = require("./routes/borrow.route");
const globalErrorHandler_1 = require("./middlewares/globalErrorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//  cors middleware
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://assignment-4-three-sigma.vercel.app",
        "*",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
//  Routes
app.use("/api", book_route_1.bookRoutes);
app.use("/api", borrow_route_1.borrowRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to Library Management app. new deploy");
});
// 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API endpoint not found",
        error: {
            path: req.originalUrl,
            method: req.method,
        },
    });
});
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
