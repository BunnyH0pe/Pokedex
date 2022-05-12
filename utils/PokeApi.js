import axios from "axios";

export async function getPokemons(
    url = "https://pokeapi.co/api/v2/pokemon"
) {
    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}