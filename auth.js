import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();
const users = []; // simple in-memory user store

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 8);
  users.push({ email, password: hashed });
  res.json({ message: "Registered successfully" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ error: "User not found" });

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

export default router;
