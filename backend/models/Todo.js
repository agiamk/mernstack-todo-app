const { Schema, default: mongoose } = require("mongoose");

const TodoSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    deadlint: { type: String, required: true },
    priority: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
