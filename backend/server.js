const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");
require("dotenv").config();

const PORT = 5000;

//mongoDB接続
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DBと接続中"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "https://mernstack-todo-app-9e69.vercel.app",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

// カスタム CORS ミドルウェア
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  // Preflightリクエストの場合は早期終了
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  next();
});

app.use(express.json());
app.use("/api/todo", todoRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(PORT, () => console.log("サーバーが起動しました"));
