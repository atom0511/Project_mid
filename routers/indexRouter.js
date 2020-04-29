const Router = require("express").Router();

Router.get("/index", async (req, res) => {
    res.render("index");
})

module.exports = Router;