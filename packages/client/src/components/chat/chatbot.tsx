import { apiClient } from "@/lib/api-client";
import axios from "axios";
import { useRef, useState } from "react";
import notificationSound from "../../assets/sounds/notification.mp3";
import popSound from "../../assets/sounds/pop.mp3";
import type { ChatFormData } from "./chat-input";
import ChatInput from "./chat-input";
import ChatMessages, { type Message } from "./chat-messages";
import TypingIndicator from "./typing-indicator";

const popAudio = new Audio(popSound);
popAudio.volume = 0.5;

const notificationAudio = new Audio(notificationSound);
notificationAudio.volume = 0.5;

type ChatResponse = {
  response: boolean;
  message: string;
  id: string;
};

const Chatbot = () => {
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");
  const conversationId = useRef(crypto.randomUUID());

  const onSubmit = async ({ prompt }: ChatFormData) => {
    try {
      setMessages((prev) => [...prev, { content: prompt, role: "user" }]);
      setIsBotTyping(true);
      setError("");
      popAudio.play();

      const { data } = await apiClient.post<ChatResponse>("api/chat", {
        prompt: prompt,
        conversationId: conversationId.current,
      });
      setMessages((prev) => [...prev, { content: data.message, role: "bot" }]);
      notificationAudio.play();
    } catch (err) {
      if (!navigator.onLine) {
        console.error("No internet connection");
        setError("No internet connection");
      } else if (axios.isAxiosError(err) && err.response?.status === 429) {
        setError(err.response.data.message);
      } else {
        console.error(err);
        setError("Something went wrong, try again!");
      }
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <div className="relative flex flex-col h-[calc(100vh-280px)] sm:h-[calc(100vh-220px)] pt-8 overflow-y-auto pb-9">
      <div className="flex flex-col flex-1 ">
        <div className="flex flex-col w-full max-w-5xl gap-3 pb-8 mx-auto">
          <ChatMessages messages={messages} />
          {isBotTyping && <TypingIndicator />}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-56 bg-white"></div>
      <ChatInput onSubmit={onSubmit} />
    </div>
  );
};

export default Chatbot;
