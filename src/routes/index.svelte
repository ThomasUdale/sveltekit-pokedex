<script lang="ts">
    import {pokemonStore} from "../stores/pokestore"
    import PokemanCard from "../components/pokemanCard.svelte"
    import type { pokemon } from "src/types/pokemon";

    let searchTerm: string = "";
    let filteredPokemon : pokemon[] = [];

    $: {
        if (searchTerm) {
            filteredPokemon = $pokemonStore.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredPokemon = [...$pokemonStore];
        }
    }
</script>

<svelte:head>
    <title>Svelte Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" placeholder="Search Pokemon" bind:value={searchTerm}>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
        <PokemanCard pokeman={pokeman}/>
    {/each}
</div>
