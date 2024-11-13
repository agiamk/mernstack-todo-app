const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const SECRET_KEY = "your_secret_key";

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    console.log(user);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); //ユーザーを探す
    if (!user) return res.status(400).json("ユーザーが見つかりません");

    const isMatch = await bcrypt.compare(password, user.password); //パスワードを比較
    if (!isMatch) return res.status(400).json("パスワードが間違っています");

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" }); //トークンを発行
    res.json({ token }); //トークンを変えす
  } catch (err) {
    console.log(err);
    res.status(500).json("サーバーエラー");
  }
});

module.exports = router;
