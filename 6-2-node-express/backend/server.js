// server.js
import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = 3000;

app.use(cors()); 


app.get("/", (req, res) => {
  res.send("Backend is running!");
});


app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
