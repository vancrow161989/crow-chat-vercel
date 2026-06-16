import type { NextFunction, Request, Response } from "express";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);

  res.status(500).json({
    response: "error",
    error: err.message || "Internal Server Error",
  });
}
