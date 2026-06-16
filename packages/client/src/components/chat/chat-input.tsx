import { type KeyboardEvent } from "react";
import { useForm } from "react-hook-form";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "../ui/button";

export type ChatFormData = {
  prompt: string;
};

type Props = {
  onSubmit: (data: ChatFormData) => void;
};

const ChatInput = ({ onSubmit }: Props) => {
  const { register, handleSubmit, reset, formState } = useForm<ChatFormData>();

  const submit = handleSubmit((data) => {
    reset({ prompt: "" });
    onSubmit(data);
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 w-full pb-6">
      <form
        onSubmit={submit}
        onKeyDown={handleKeyDown}
        className="flex flex-col items-end w-full max-w-5xl gap-6 p-6 mx-auto bg-white border-2 item items rounded-3xl"
      >
        <textarea
          autoFocus
          {...register("prompt", {
            required: true,
            validate: (data) => data.trim().length > 0,
          })}
          className="w-full border-0 resize-none focus:outline-0"
          placeholder="Ask anything"
          maxLength={1000}
        />
        <Button
          disabled={!formState.isValid}
          type="submit"
          className="rounded-full w-14 h-14"
        >
          <FaArrowUp />
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
