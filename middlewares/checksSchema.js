const {check} = require("express-validator")

const checks = [
    check("nombre")
        .notEmpty().withMessage("el campo nombre es obligatorio")
        .isString("el campo nombre solo debe contener letras"),
    check("alias")
        .notEmpty().withMessage("el campo alias es obligatorio")
        .isString("el campo alias solo debe contener letras"),
    check("ciudad")
        .notEmpty().withMessage("el campo ciudad es obligatorio")
        .isString("el campo ciudad solo debe contener letras"),
    check("estadio")
        .notEmpty().withMessage("el campo estadio es obligatorio")
        .isString("el campo estadio solo debe contener letras"),
    check("dia_fundacion")
        .notEmpty().withMessage("el campo dia_fundacion es obligatorio")
        .isNumeric("el campo dia_fundacion solo debe contener letras"),
    check("mes_fundacion")
        .notEmpty().withMessage("el campo mes_fundacion es obligatorio")
        .isNumeric("el campo mes_fundacion solo debe contener letras"),
    check("anio_fundacion")
        .notEmpty().withMessage("el campo anio_fundacion es obligatorio")
        .isNumeric("el campo anio_fundacion solo debe contener letras"),
    check("titulos")
        .notEmpty().withMessage("el campo titulos es obligatorio")
        .isString("el campo titulos solo debe contener letras"),
    check("pagina_web")
        .notEmpty().withMessage("el campo pagina_web es obligatorio")
        .isString("el campo pagina_web solo debe contener letras"),

]

module.exports = checks