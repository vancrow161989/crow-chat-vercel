````markdown
# 🎡 Crow Chat – AI Theme Park Assistant

Crow Chat is a full‑stack demo application that integrates AI into everyday user experiences.  
It simulates an **imaginary theme park chatbot** where visitors can ask questions about the park, and also includes a **product review summarizer** that uses AI to condense customer feedback into quick insights.

This project showcases how AI can be embedded into modern applications using **React, Prisma, MySQL, and OpenRouter**.

---

## ✨ Features

- 🤖 **AI Chatbot** – Users can chat with an AI assistant themed around a fictional theme park.
- 📝 **Product Review Summarizer** – Click a button to generate AI‑powered summaries of product reviews.
- ⚡ **Full‑stack Integration** – Demonstrates frontend + backend workflow with TanStack Query, Prisma, and MySQL.
- 🔐 **Environment‑based API keys** – Securely integrates with OpenRouter (instead of OpenAI) for AI responses.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, TanStack Query
- **Backend**: Node.js, Prisma ORM, MySQL
- **AI Provider**: [OpenRouter](https://openrouter.ai)
- **UI**: TailwindCSS, Radix/Base UI components

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/vancrow161989/crow-chat.git
cd crow-chat
```
````

Install dependencies:

```bash
npm install
```

---

## 🔧 Environment Variables

This project requires a `.env` file.  
For security, **do not commit your real `.env`**. Instead, copy from the provided example:

```bash
cp .env.example .env
```

Fill in your own values:

```env
# Database connection
DATABASE_URL="mysql://root:@localhost:3306/review_summarizer"

# AI providers
OPENAI_API_KEY=your-openai-key-here
OPENROUTER_API_KEY=your-openrouter-key-here
```

---

## 🚀 Running the App

Start the development server:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:3000
```

---

## 📖 Usage

- Visit the app in your browser.
- Use the **chatbot** to ask questions about the imaginary theme park.
- Navigate to a product page and click **Summarize** to generate AI‑powered summaries of reviews.

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute this project with attribution.

---
