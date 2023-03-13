const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

async function getPokemonList() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getPokemonDetails(pokemonUrl) {
  try {
    const response = await fetch(pokemonUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function showPokemonList() {
  const pokemonListElement = document.querySelector(".pokemon-list");
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
  try {
    const pokemonList = await getPokemonList();
    let html = "";
    for (const pokemon of pokemonList) {
      const pokemonDetails = await getPokemonDetails(pokemon.url);
      const image = pokemonDetails.sprites.front_default;
      const height = pokemonDetails.height;
      const weight = pokemonDetails.weight;
      html += `<li><img src="${image}" alt="${pokemon.name}"><a href="details.html?name=${pokemon.name}">${pokemon.name}</a><p>Height: ${height}</p><p>Weight: ${weight}</p></li>`;
    }
    pokemonListElement.innerHTML = html;

    setTimeout(() => {
      loader.style.display = "none";
      pokemonListElement.style.display = "block";
    }, 1000);
  } catch (error) {
    pokemonListElement.innerHTML = `<div class="error-message">
    <p>An error has occurred.</p>
  </div>`;
    loader.style.display = "none";
    pokemonListElement.style.display = "block";
  }
}

showPokemonList();
