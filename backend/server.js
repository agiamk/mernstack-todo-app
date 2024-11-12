const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();

const PORT = 5000;

//mongoDB接続
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DBと接続中"))
  .catch((err) => console.log(err));

app.use(express.json());
// app.use("/api/todos", todosRoute);

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(PORT, () => console.log("サーバーが起動しました"));
