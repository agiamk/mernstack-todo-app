const jwt = require("jsonwebtoken");
const SECRET_KEY = "your_secret_key";

const auth = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) return res.status(401).json("認証トークンが必要です");

  try {
    const decode = jwt.verify(token, SECRET_KEY);
    req.user = decode;
    next();
  } catch (err) {
    res.status(401).json("無効なトークンです。");
  }
};

module.exports = auth;
