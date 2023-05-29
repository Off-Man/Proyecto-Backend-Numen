const express = require("express");
const logger = require("morgan")
const app = express();
const cors = require("cors")

app.use(express.json()); // me permite enviar objetos a travez de las rutas.
app.use(logger("dev")); //para loguear en consola todas las consultas HTTP hechas.
app.use(cors());

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const {connect} = require("./db/db")

app.use("/", indexRouter);
app.use("/api/v1", apiRouter);
connect();

module.exports = app