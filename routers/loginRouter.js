const Router = require("express").Router();

Router.get("/login", async (req, res) => {
    res.render("login", {css1: "login.css", css2: ""});
})

module.exports = Router;