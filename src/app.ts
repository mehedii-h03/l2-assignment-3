import express, { Request, Response } from "express";
import { bookRoutes } from "./routes/book.route";
import { borrowRoutes } from "./routes/borrow.route";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app = express();
app.use(express.json());

app.use("/api", bookRoutes);
app.use("/api", borrowRoutes);
app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management app.");
});

export default app;
