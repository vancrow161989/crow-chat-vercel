import type { NextFunction, Request, Response } from "express";

const MAX_PROMPTS_PER_IP = 5;

// In-memory for now — fine for a single-instance demo server.
// Resets on server restart, and won't work correctly across multiple
// instances or serverless (each cold start gets a fresh Map). If you
// deploy to something serverless later, swap this for Redis/Upstash.
const promptCounts = new Map<string, number>();

export const ipLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip ?? "unknown";
  const count = promptCounts.get(ip) ?? 0;

  if (count >= MAX_PROMPTS_PER_IP) {
    res.status(429).json({
      message:
        "You've reached the demo limit of 5 messages for this session. Thanks for trying it out!",
    });
    return;
  }

  promptCounts.set(ip, count + 1);
  next();
};
