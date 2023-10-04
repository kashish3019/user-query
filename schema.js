const mongoose = require("mongoose")
let userschema = new mongoose.Schema({
    name: String,
    gender: String,
    shirt_size: String,
    language: String
})
let usersdata = mongoose.model("user", userschema)
module.exports = usersdata