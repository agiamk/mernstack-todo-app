const { Schema, default: mongoose } = require("mongoose");

const TodoSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    priority: { type: String },
    isDone: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
