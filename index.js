import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import songRoutes from "./routes/song.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/song", songRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
