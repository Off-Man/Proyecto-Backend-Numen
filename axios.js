const axios = require("axios")


/* const traerPokeapi = async () => {
    const {pokemon} = await axios.get("https://pokeapi.co/api/v2/pokemon/charmander")
    return pokemon
} */

    const traerPokeapi = async () => {
        try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/charmander");
        const { data } = response;
        return data;
        } catch (error) {
        res.status(400).json(error)
        }
    };