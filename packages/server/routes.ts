import express from "express";
import { chatController } from "./controllers/chat.controller";
import { productsController } from "./controllers/products.controller";
import { reviewsController } from "./controllers/review.controller";
import { asyncHandler } from "./middlewares/async.handler";
import { ipLimiter } from "./middlewares/ip.limiter";

const router = express.Router();

router.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

router.post("/api/chat", ipLimiter, asyncHandler(chatController.sendMessage));

router.get(
  "/api/products/:id/reviews",
  asyncHandler(reviewsController.getReviews)
);

router.post(
  "/api/products/:id/reviews/summarize",
  reviewsController.summarizeReviews
);

router.get("/api/products", asyncHandler(productsController.getProducts));

export default router;
