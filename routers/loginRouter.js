const Router = require("express").Router();
const fs = require("fs");
const { createData, readData } = require("../controllers/dataController");
const {checkLogin} = require("../controllers/checkLogin");

Router.get("/login", async (req, res) => {
  let read = await readData("dataUser.json");
  console.log("dataUser =", read);
  res.render("login", { css1: "css/aos.css", css2: "css/login.css" });
});

Router.post("/login", async (req, res) => {
  console.log("/postLogin");
  let mUserName = req.body.uname;
  let mPassword = req.body.psw;
  let isLogin = Boolean(await checkLogin(mUserName, mPassword));
  if (isLogin == true) {
    console.log("login succeed!");
    res.render("about", { css1: "css/aos.css", css2: "css/login.css" }); 
  } else {
    console.log("login failed!");
    res.render("login", { css1: "css/aos.css", css2: "css/login.css" });
  }
});

module.exports = Router;



