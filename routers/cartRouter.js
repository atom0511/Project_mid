const Router = require("express").Router();
const fs = require("fs");
Router.get("/cart", async (req, res) => {
    res.render("cart");
})

module.exports = Router;