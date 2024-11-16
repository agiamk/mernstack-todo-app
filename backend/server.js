const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/auth");
const secureRoutes = require("./routes/secure");
const cors = require("cors");

const PORT = 5000;

//mongoDB接続
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DBと接続中"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// app.use("/api/todos", todosRoute);
app.use("/api/auth", authRoutes);
app.use("/api/secure", secureRoutes);

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(PORT, () => console.log("サーバーが起動しました"));
