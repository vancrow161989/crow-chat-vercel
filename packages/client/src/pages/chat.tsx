import Chatbot from "../components/chat/chatbot";

const Chat = () => {
  return (
    <div>
      <div className="bg-white border-b border-gray-200 pb-3.5">
        <p className="max-w-2xl px-4 py-2 mx-auto mt-4 text-sm text-center text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-lg">
          This is a demo — please limit your testing to about 5 prompts to keep
          API costs down. <br />
          Thanks for trying it out!
        </p>
      </div>
      <Chatbot />
    </div>
  );
};

export default Chat;
