const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://haroon:xbTJtnOygnjSEpi0@cluster0.y3rkw.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
