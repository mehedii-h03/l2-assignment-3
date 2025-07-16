import express, { Request, Response } from "express";
import { bookRoutes } from "./routes/book.route";
import { borrowRoutes } from "./routes/borrow.route";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app = express();
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
