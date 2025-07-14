import { ErrorRequestHandler } from "express";
import mongoose from "mongoose";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    message = "Validation failed";
  } else if (err instanceof mongoose.Error.CastError) {
    statusCode = 400;
    message = "Invalid ID provided";
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};
