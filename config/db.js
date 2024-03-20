const mongoose = require("mongoose");

require("dotenv").config();

// establishing connection with mongoDB atlas
const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection };
