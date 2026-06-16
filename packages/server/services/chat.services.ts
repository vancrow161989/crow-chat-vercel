import fs from "fs";
import path from "path";

import { openRouterClient } from "../providers/openrouter/openrouter.client";
import { conversationRepository } from "../repositories/conversation.repository";

// commented for reference for OPENAI
// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// Commented for reference - For OpenAI
// let lastResponseId: string | null = null;
// const conversations: Record<string, Message[]> = {};

const template = fs.readFileSync(
  path.join(__dirname, "..", "prompts", "chatbot.txt"),
  "utf-8"
);

const parkInfo = fs.readFileSync(
  path.join(__dirname, "..", "prompts", "WonderWorld.md"),
  "utf-8"
);

const instructions = template.replace("{{parkInfo}}", parkInfo);

export const chatService = {
  async sendMessage(prompt: string, conversationId: string) {
    const messages = [
      {
        role: "system",
        content: instructions,
      },
      ...(conversationRepository.getLastMessages(conversationId) ?? []),
    ];

    conversationRepository.setConverations(conversationId, prompt);

    const response = await openRouterClient.generateText({ messages });

    // Commented for reference - For OpenAI
    // lastResponseId = data.id;+

    // Commented for reference - For OpenAI
    // res.json({ message: response.output_text });

    conversationRepository.addNewMessage(conversationId, response.message);

    return response;
  },
};
