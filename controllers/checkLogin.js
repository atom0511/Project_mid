const fs = require("fs");
const { readData } = require("../controllers/dataController");

checkLogin = async (name, pass) => {
    console.log("checking login...")
    let data = await readData("dataUser.json");
    for (let i = 0; i < data.length; i++) {
        if (name == data[i].userName && pass == data[i].pwd) {
            return true;
        }
    }
    return false;
}
checkExistAccount = async (name) => {
    console.log("checking exist account..");
    let data = await readData("dataUser.json");
    for (let i = 0; i < data.length; i++) {
        if (name == data[i].userName) {
            return true;
        }
    }
    return false;
}
module.exports =
{
    checkLogin: checkLogin,
    checkExistAccount: checkExistAccount
};