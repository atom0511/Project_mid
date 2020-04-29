const Router = require("express").Router();

Router.get("/contact", async (req, res) => {
    res.render("contact");
})

module.exports = Router;