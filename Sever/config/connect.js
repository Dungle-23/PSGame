const mongoose = require('mongoose');

const Connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/pepsi_Sever')
        console.log("TC")
    } catch (e) {
        console.log("TC1")
    }
}

module.exports = { Connect }