const Router = require("express").Router();

Router.get("/shopSingle", async (req, res) => {
    res.render("shop-single");
})

module.exports = Router;