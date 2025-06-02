const express = require("express");
const app = express();

const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");


app.use("/new", newRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running express app - listening on port ${PORT}`);
});