import express, { Request, Response, NextFunction } from "express";
import { bookRoutes } from "./routes/book.route";
import { borrowRoutes } from "./routes/borrow.route";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app = express();

// Middleware to handle CORS properly
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

app.use("/api", bookRoutes);
app.use("/api", borrowRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management app.");
});

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
