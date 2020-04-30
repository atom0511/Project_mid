const Router = require("express").Router();
const fs = require("fs");
const {
    createData
} = require("../controllers/dataController");
Router.get("/test", async (req, res) => {
    res.render("test");
})
Router.post("/test", async (req, res) => {
    let newContent = req.body.content;
    await createData(newContent, "dataCart.json");
    res.render("test");
})
module.exports = Router;