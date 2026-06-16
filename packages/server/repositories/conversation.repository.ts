export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

const conversations: Record<string, Message[]> = {};

export const conversationRepository = {
  setConverations(conversationId: string, prompt: string) {
    if (!conversations[conversationId]) {
      conversations[conversationId] = [];
    }
    const messages = conversations[conversationId];

    messages.push({
      role: "user",
      content: prompt,
    });
  },

  addNewMessage(conversationId: string, responseContent: string) {
    if (!conversations[conversationId]) {
      conversations[conversationId] = [];
    }
    const messages = conversations[conversationId];
    messages.push({
      role: "assistant",
      content: responseContent,
    });
  },
  getLastMessages(conversationId: string): Message[] {
    return conversations[conversationId] ?? [];
  },
};
