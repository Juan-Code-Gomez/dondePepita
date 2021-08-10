const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    name: String,
    adress: String,
    city: String
})

const store = mongoose.model("store", storeSchema);
module.exports = store;