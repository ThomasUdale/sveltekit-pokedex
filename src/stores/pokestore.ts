import {writable} from "svelte/store";
import type { pokemon } from "src/types/pokemon";

export const pokemonStore = writable<pokemon[]>([]);
let loaded = false;

async function fetchPokemon() {
    if (loaded) return;
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150"
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon: pokemon[] = data.results.map((data, index) => {
        let newPokemon: pokemon = {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        }
        return newPokemon;
    });
    pokemonStore.set(loadedPokemon);
    loaded = true;
}
fetchPokemon();