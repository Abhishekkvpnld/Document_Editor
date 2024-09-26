import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import { dbConnection } from "./config/dbConnection.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
  })
);

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.use("/api/auth", authRoute);

const PORT = 4000;

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
