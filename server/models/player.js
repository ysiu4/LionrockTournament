let mongoose = require("mongoose");

let Player = mongoose.Schema(
    {
        name : String ,
        mobile : String,
        email : String
    }
)

module.exports = mongoose.model("player", Player);