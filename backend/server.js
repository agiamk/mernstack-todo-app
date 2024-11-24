const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");
require("dotenv").config();

//mongoDB接続
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DBと接続中"))
  .catch((err) => console.log(err));

// CORS設定
app.use(cors()); // CORSミドルウェア

// OPTIONSリクエストの処理
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // 必要に応じて特定のオリジンに変更
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(204).end(); // Preflightリクエストに対する応答
  }

  next();
});

app.use(express.json());
app.use("/api/todo", todoRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello express");
});

module.exports = app;
