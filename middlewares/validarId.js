    const {Equipo} = require("../models/equipos")
    
    const validarId = async (req,res,next) => {
        const buscarEquipo = await Equipo.findById(req.params.id)
        if(buscarEquipo !== null){
            next()
    }else {
        res.status(500).json({
            Mensaje: "el id " + req.params.id + " es inválido"
        })
    }
}
module.exports = {validarId}

