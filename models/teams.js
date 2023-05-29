const {Schema, model} = require("mongoose");

const schema = new Schema({
    nombre:{
        type: String,
        require: true,
        unique: true
    },
    alias:{
        type: String,
    },
    ciudad:{
        type: String,
        require: true
    },
    estadio:{
        type: String,
        require: true
    },
    fundacion:{
        type: String,
        require: true
    },
    fundacionMinima:{
        type: String,
        require: true
    },
    titulos: {
        type: String,
        require: true
    },
    pagina_web:{
        type: String,
        require: true
    }

})

const Team = model("Team", schema);
module.exports = {Team}