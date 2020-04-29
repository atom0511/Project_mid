const Router = require("express").Router();

Router.get("/cart", async (req, res) => {
    res.render("cart");
})

module.exports = Router;