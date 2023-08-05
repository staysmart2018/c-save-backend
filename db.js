const mongoose = require('mongoose');
const Cont = require('./models/data.js')
require('dotenv').config()

const mongoDB = async () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("connected")
    });
}

module.exports = mongoDB;