const mongoose = require("mongoose")
const instrumentSchema = mongoose.Schema({
    instrument_name: String,
    manufacturer: String,
    price: Number,
})
module.exports = mongoose.model("instruments", instrumentSchema)