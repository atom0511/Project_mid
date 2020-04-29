const Router = require("express").Router();

Router.get("/thankyou", async (req, res) => {
    res.render("thankyou");
})

module.exports = Router;