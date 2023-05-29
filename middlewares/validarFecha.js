

function validarFecha(req, res, next) {
    
    const fundacion = new Date(req.body.fundacion);
    const fundacionMinima = new Date("23/12/1889");

    if (fundacion < fundacionMinima) {
    return res.status(400).json({ error: "La fecha ingresada no puede ser menor que " + fundacionMinima });
    }
    next();
}

module.exports = {validarFecha};