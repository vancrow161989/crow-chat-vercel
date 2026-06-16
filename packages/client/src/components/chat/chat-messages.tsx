import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

export type Message = {
  content: string;
  role: "user" | "bot";
};

type Props = {
  messages: Message[];
};

const ChatMessages = ({ messages }: Props) => {
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onCopyMessage = (
    e: React.ClipboardEvent<HTMLParagraphElement>
  ): void => {
    const selection = window.getSelection()?.toString().trim();
    if (selection) {
      e.preventDefault();
      e.clipboardData.setData("text/plain", selection);
    }
  };

  return (
    <>
      {messages.map((message, index) => (
        <div
          key={index}
          ref={index === messages.length - 1 ? lastMessageRef : null}
          onCopy={onCopyMessage}
          className={`px-3 py-2 rounded-xl text-lg
                  ${
                    message.role === "bot"
                      ? "bg-blue-600 text-white self-start"
                      : "bg-gray-100 text-black self-end"
                  }`}
        >
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      ))}
    </>
  );
};

export default ChatMessages;
