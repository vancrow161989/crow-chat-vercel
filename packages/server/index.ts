import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./middlewares/error.handler";
import router from "./routes";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.set("json spaces", 2);
app.set("trust proxy", 1);
app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
