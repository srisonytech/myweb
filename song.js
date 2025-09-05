import express from "express";
import jwt from "jsonwebtoken";
import { Configuration, OpenAIApi } from "openai";

const router = express.Router();
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

// Middleware: check login token
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

router.post("/generate", authMiddleware, async (req, res) => {
  const { desc } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a lyricist. Write a song in Telugu and English." },
        { role: "user", content: desc }
      ]
    });

    const lyrics = response.choices[0].message.content;

    // Fake audio link for now
    const audioUrl = "https://example.com/fake_song.mp3";

    res.json({ lyrics, audioUrl });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate song" });
  }
});

export default router;
