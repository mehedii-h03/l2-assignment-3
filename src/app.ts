import express, { Request, Response } from "express";
import cors from "cors";
import { bookRoutes } from "./routes/book.route";
import { borrowRoutes } from "./routes/borrow.route";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app = express();

app.use(express.json());

//  cors middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://assignment-4-three-sigma.vercel.app",
      "*",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

//  Routes
app.use("/api", bookRoutes);
app.use("/api", borrowRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management app.");
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

app.use(globalErrorHandler);

export default app;
