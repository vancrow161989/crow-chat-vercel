import dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./middlewares/error.handler";
import router from "./routes";

dotenv.config();

const app = express();
app.use(express.json());
app.set("json spaces", 2);
app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runnin on http://localhost:${port}`);
});
