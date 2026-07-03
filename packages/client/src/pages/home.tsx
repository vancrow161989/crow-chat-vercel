import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 ">
      <h1 className="text-4xl font-bold">AI Integration Demo</h1>
      <p className="max-w-md text-muted-foreground">
        Hi, I'm Michael Ivan. This personal project showcases the following{" "}
        <b className="text-black">AI-powered features:</b>
      </p>

      <ul className="mt-3 ml-5 list-disc max-w-md text-muted-foreground space-y-2 mt-0">
        <li>
          <strong className="text-black">MikeWorld Support Chatbot</strong> – A
          customer support chatbot for an imaginary theme park that answers
          questions about rides, tickets, dining, accommodations, and more.
        </li>
        <li>
          <strong className="text-black">Product Review Summarizer</strong> – An
          AI-powered feature that analyzes customer reviews and generates
          concise, easy-to-read summaries.
        </li>
      </ul>
      <div className="flex flex-col w-full md:flex-row gap-4 md:w-auto">
        <Link to="/chat">
          <Button className="w-full md:w-auto">Try MikeWorld Chatbot</Button>
        </Link>
        <Link to="/products">
          <Button variant="outline" className="w-full md:w-auto">
            Try Review Summarizer
          </Button>
        </Link>
      </div>

      <p className="max-w-2xl px-4 py-2 mx-auto mt-4 text-sm text-center text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-lg">
        This app runs on free-tier hosting, so responses (page load, chat
        messages, or summaries) may take 30-60 seconds the first time. If it
        seems stuck, try refreshing. Thanks for your patience!
      </p>
    </div>
  );
};

export default Home;
