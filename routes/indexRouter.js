const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Index page"));
module.exports = indexRouter;