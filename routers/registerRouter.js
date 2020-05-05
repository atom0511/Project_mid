const Router = require("express").Router();
const fs = require("fs");
const { createData, readData } = require("../controllers/dataController");
const {checkExistAccount} = require("../controllers/checkLogin");

Router.get("/register", async (req, res) => {
  res.render("register", { css1: "css/aos.css", css2: "css/register.css" });
});

Router.post("/register", async (req, res) => {
  console.log("/postRegister");
  let rUserName = req.body.runame;
  let rPassword = req.body.rpsw;
  let isExist = Boolean(await checkExistAccount(rUserName));
  if(isExist == true){
    console.log("account already exist!")
    res.render("register", { css1: "css/aos.css", css2: "css/register.css" })

  }else{
    console.log("register account succeed!")
    await createData("dataUser.json", rUserName, rPassword);
    res.render("about", { css1: "css/aos.css", css2: "css/register.css" });
  }
});

module.exports = Router;

