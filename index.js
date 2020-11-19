const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jiwook:yangjiuk47@cluster0.ilk5h.mongodb.net/cluster0?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!~~~");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
