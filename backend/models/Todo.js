const { Schema, default: mongoose } = require("mongoose");

const TodoSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    deadline: { type: String, required: true },
    priority: { type: String },
    idDone: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
