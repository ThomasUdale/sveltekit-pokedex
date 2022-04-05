<script lang="ts" context="module">
    export async function load({params}) {
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        const res = await fetch(url);
        const pokeman = await res.json();
        return {props: {pokeman}}
    }
</script>

<script lang="ts">
    export let pokeman;
    const type = pokeman.types[0].type.name;
</script>

<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
<div class="flex flex-col items-center">
    <p>Type: {type} | Height: {pokeman.height} | Weight: {pokeman.weight}</p>
    <img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name}/>
</div>

