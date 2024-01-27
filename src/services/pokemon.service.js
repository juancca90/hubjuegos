import { axiosUtil } from "../utils";

export const getByPokemon = async (id) => {
    const optionsRequest = {
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    };
    return await axiosUtil(optionsRequest);
};