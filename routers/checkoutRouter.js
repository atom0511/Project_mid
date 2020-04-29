const Router = require("express").Router();

Router.get("/checkout", async (req, res) => {
    res.render("checkout");
})

module.exports = Router;