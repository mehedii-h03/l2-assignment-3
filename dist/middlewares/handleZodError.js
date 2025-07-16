"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleZodError = void 0;
const handleZodError = (error) => {
    const formattedErrors = {};
    error.issues.forEach((err) => {
        const field = err.path[0];
        formattedErrors[field] = {
            message: err.message,
            name: "ValidatorError",
            properties: {
                message: err.message,
                type: err.code === "too_small" ? "min" : err.code,
                min: err.code === "too_small" ? 0 : undefined,
            },
            kind: err.code === "too_small" ? "min" : err.code,
            path: field,
        };
    });
    return {
        message: "Validation failed",
        success: false,
        error: {
            name: "ValidationError",
            errors: formattedErrors,
        },
    };
};
exports.handleZodError = handleZodError;
