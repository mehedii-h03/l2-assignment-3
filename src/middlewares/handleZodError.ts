import { ZodError } from "zod";

export const handleZodError = (error: ZodError) => {
  const formattedErrors: Record<string, any> = {};

  error.issues.forEach((err) => {
    const field = err.path[0] as string;

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
