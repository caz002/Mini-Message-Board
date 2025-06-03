const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Welcome to the Message Board! Feel free to make a new post and upload a comment to share your thoughts.",
      user: "Amy",
      added: new Date().toLocaleString().split(',')[0]
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date().toLocaleString().split(',')[0]
    }
  ];

const links = [
    { href: "/new", text: "New Message" },
]
indexRouter.get("/", (req, res) => res.render("index", { messages: messages, links: links }));
indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date().toLocaleString().split(',')[0] });
    res.redirect("/");
})
module.exports = indexRouter;