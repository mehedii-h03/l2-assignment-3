"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const globalErrorHandler = (err, req, res) => {
    let statusCode = 500;
    let message = "Something went wrong";
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        statusCode = 400;
        message = "Validation failed";
    }
    else if (err instanceof mongoose_1.default.Error.CastError) {
        statusCode = 400;
        message = "Invalid ID provided";
    }
    res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
};
exports.globalErrorHandler = globalErrorHandler;
