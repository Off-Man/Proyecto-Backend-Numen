const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController")
const {validarId} = require("../middlewares/validarId")
const {validarFecha} = require("../middlewares/validarFecha")
const checks = require("../middlewares/checks")
const {validarChecks} = require("../middlewares/validarChecks")


router.get("/ver", apiController.verListado)
router.get("/buscar/nombre/:nombre", apiController.verEquipo)
router.get("/buscar/id/:id",validarId, apiController.buscarId)
router.post("/crear", validarFecha, checks, validarChecks, apiController.crear)
router.put("/editar/:id" ,validarId, validarFecha, checks, validarChecks, apiController.editar)
router.delete("/borrar/:id" , validarId, apiController.borrar)

module.exports = router