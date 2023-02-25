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

async function showPokemonList() {
  const pokemonListElement = document.querySelector(".pokemon-list");
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
  try {
    const pokemonList = await getPokemonList();
    let html = "";
    pokemonList.forEach(function (pokemon) {
      html += `<li><a href="details.html?name=${pokemon.name}">${pokemon.name}</a></li>`;
    });
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
