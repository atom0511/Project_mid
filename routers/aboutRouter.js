const Router = require("express").Router();
const fs = require("fs");

Router.get("/", async (req, res) => {
    res.render("about");
})

module.exports = Router;