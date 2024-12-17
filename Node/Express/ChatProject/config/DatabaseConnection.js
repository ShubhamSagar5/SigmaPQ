const mongoose = require('mongoose')

const dbConnection = async() =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/chatProject?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.0")
}

module.exports = dbConnection;