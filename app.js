const express = require("express");
const app = express();
const path = require("node:path");
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running express app - listening on port ${PORT}`);
});