import type { AiCommonResponse } from "../../types";
import type {
  OpenRouterErrorResponse,
  OpenRouterResponse,
} from "./openrouter.types";

type Messages = {
  role: string;
  content: string;
};

type OpenrouterGenerateText = {
  model?: string;
  messages: Messages[];
  temperature?: Number;
  maxTokens?: number;
};

export const openRouterClient = {
  async generateText({
    model = "openai/gpt-4o-mini",
    messages,
    temperature = 0.2,
    maxTokens = 300,
  }: OpenrouterGenerateText): Promise<AiCommonResponse> {
    // Commented for reference - For OpenAI
    // const { prompt } = req.body;

    // const response = await client.responses.create({
    //   model: "gpt-5.4-nano",
    //   input: prompt,
    //   temperature: 0.2,
    //   max_output_tokens: 100,
    // });
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages,
          temperature,
          max_tokens: maxTokens,
        }),
      }
    );

    if (!response.ok) {
      const errorData = (await response.json()) as OpenRouterErrorResponse;
      return {
        id: null,
        message: errorData?.error?.message ?? "Unknown API error",
        response: "Failed",
      };
    }

    const data = (await response.json()) as OpenRouterResponse;

    return {
      id: data.id,
      message: data.choices?.[0]?.message?.content ?? "No response",
      response: "Success",
    };
  },
};
