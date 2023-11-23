const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    title: {type: String, require: true},
    address : {type: String, require: true},
});

module.exports = mongoose.model("location",locationSchema);