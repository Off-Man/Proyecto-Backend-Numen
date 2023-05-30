

function validarFecha(req, res, next) {

    const dia_fundacion = req.body.dia_fundacion;
    const mes_fundacion = req.body.mes_fundacion;
    const anio_fundacion = req.body.anio_fundacion;
    const fechaConcatenada = anio_fundacion + '-' + mes_fundacion + '-' + dia_fundacion;

    const fundacion = new Date(fechaConcatenada);
    const fundacionMinima = new Date("1889-12-23");

    if (fundacion < fundacionMinima) {
    return res.status(400).json({ error: "La fecha ingresada no puede ser menor que: " + fundacionMinima });
    }
    next();
}

module.exports = {validarFecha};