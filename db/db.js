const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log("Conectado a MongoDB");
    } catch {
        console.log("no se pudo conectar a la base de datos")
    }
}

module.exports = {connect}