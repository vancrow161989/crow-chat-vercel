import type { Request, Response } from "express";
import z from "zod";
import { chatService } from "../services/chat.services";

const chatSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(1, "Prompt is required.")
    .max(1000, "Prompt is too long (max is 1000 characters)"),
  conversationId: z.string().uuid({ version: "v4" }),
});

export const chatController = {
  async sendMessage(req: Request, res: Response) {
    const parseResult = chatSchema.safeParse(req.body);
    if (!parseResult.success) {
      const formatted = z.treeifyError(parseResult.error);
      res.status(400).json(formatted);
      return;
    }

    const { prompt, conversationId } = req.body;

    const responseData = await chatService.sendMessage(prompt, conversationId);

    res.json({
      id: responseData.id,
      response: responseData.response,
      message: responseData.message,
    });
  },
};
