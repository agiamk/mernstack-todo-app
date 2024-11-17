const router = require("express").Router();
const Todo = require("../models/Todo");

//todoを追加
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);

  try {
    const savedTodo = await newTodo.save();
    return res.status(200).json(savedTodo);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//投稿したすべてのtodoを取得
router.get("/:userId", async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.params.userId });

    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//todoを削除
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    return res.status(200).json("投稿を削除しました");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//todoを更新
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    await todo.updateOne({
      $set: req.body,
    });
    return res.status(200).json("編集完了！");
  } catch (err) {
    return res.status(403).json("自分の投稿しか削除できません");
  }
});

module.exports = router;