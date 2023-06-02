const {Equipo} = require("../models/equipos");


class ApiController {
    
    async verListado(req, res){
        const equiposLaLiga = await Equipo.find()
        res.status(200).json(equiposLaLiga)
    }
    async buscarId(req, res){
        const equiposLaLiga = await Equipo.findById(req.params.id)
        res.status(200).json(equiposLaLiga)
        }
    async verEquipo(req, res){
        const equiposLaLiga = await Equipo.findOne({nombre: req.params.nombre})
        res.status(200).json(equiposLaLiga)
        }
    async crear(req, res){
        try {
            const equipoGuardado = new Equipo(req.body)
            await equipoGuardado.save()
            res.status(201).json(equipoGuardado)
        } catch (error) {
                res.status(400).json(error)
        }
    }
    async editar (req, res){
        try {
            await Equipo.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({
                Mensaje: "el equipo con id " + req.params.id + " fue actualizado"
            })
        } catch (error) {
            res.status(400).json(error)
        }
}
async borrar (req, res){
    await Equipo.findByIdAndDelete(req.params.id)
    res.status(201).json({
        Mensaje: "el equipo con id " + req.params.id + " fue eliminado"
    })
}
}

module.exports = new ApiController