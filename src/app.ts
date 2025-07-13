import express, { Request, Response } from "express";
import { bookRoutes } from "./routes/book.route";

const app = express();

app.use("/api", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management app.");
});

export default app;
