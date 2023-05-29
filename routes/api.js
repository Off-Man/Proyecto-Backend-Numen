const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController")
const {validarId} = require("../middlewares/validarId")
const checks = require("../middlewares/checks")
const {validarChecks} = require("../middlewares/validarChecks")
const {validarFecha} = require("../middlewares/validarFecha")


router.get("/ver", apiController.verListado)
router.get("/buscar/nombre/:nombre", apiController.verEquipo)
router.get("/buscar/id/:id",validarId, apiController.buscarId)
router.post("/crear", checks,validarFecha, validarChecks, apiController.crear)
router.put("/editar/:id" ,validarId,validarFecha,checks,validarChecks, apiController.editar)
router.delete("/borrar/:id" ,validarId, apiController.borrar)

module.exports = router