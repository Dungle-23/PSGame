const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Userscine = new Schema({
    PhoneNumber:{type : Number}
})
module.exports = mongoose.model("Users",Userscine)