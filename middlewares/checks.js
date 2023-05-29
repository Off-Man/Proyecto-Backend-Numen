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
    check("fundacion")
        .notEmpty().withMessage("el campo fundación es obligatorio")
        .isString("el campo fundacion solo debe contener letras"),
    check("titulos")
        .notEmpty().withMessage("el campo titulos es obligatorio")
        .isString("el campo titulos solo debe contener números"),
    check("pagina_web")
        .notEmpty().withMessage("el campo pagina_web es obligatorio")
        .isString("el campo pagina_web solo debe contener letras"),

]

module.exports = checks