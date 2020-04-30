const mongoose = require("mongoose");

let dataSchema = {
    id: Number,
    image: String,
    product: String,
    price: "$" + Number,
    quantity: Number,   
    total: "$" + Number
}

let dataModel = mongoose.model("dataCart", dataSchema);
module.exports = dataModel;