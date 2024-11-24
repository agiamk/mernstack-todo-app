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
app.use(
  cors({
    origin: "*", // 許可するオリジン
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/todo", todoRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello express");
});

module.exports = app;
