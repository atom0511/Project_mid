const Router = require("express").Router();

Router.get("/shop", async (req, res) => {
    res.render("shop");
})

module.exports = Router;