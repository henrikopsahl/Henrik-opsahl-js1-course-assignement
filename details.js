const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const pokemonName = urlParam.get("name");
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

async function getPokemonDetails() {
  const response = await fetch(url);
  const data = await response.json();

  return {
    name: data.name,
    abilities: data.abilities.map(function (ability) {
      return ability.ability.name;
    }),
    height: data.height,
    weight: data.weight,
  };
}

async function showPokemonDetails() {
  const makeHtml = document.querySelector(".poke-details");
  const loader = document.querySelector(".loader");

  try {
    const pokemon = await getPokemonDetails();

    setTimeout(() => {
      loader.style.display = "none";
      makeHtml.innerHTML = `
        <p class="bolder-paragraph">Name:</p> <p>${pokemon.name}</p>
        <p class="bolder-paragraph">Abilities:</p> <p>${pokemon.abilities.join(
          ", "
        )}</p> 
        <p class="bolder-paragraph">Height:</p> <p>${pokemon.height} meters</p>
        <p class="bolder-paragraph">Weight:</p>  <p>${pokemon.weight} kg</p>
      `;
      makeHtml.style.display = "block";
      document.querySelector("h1").textContent = pokemon.name;
    }, 1000);
  } catch (error) {
    console.log(error);

    loader.style.display = "none";
    makeHtml.innerHTML = `
      <div class="error-message">
        <p>An error has occurred</p>
      </div>`;
    makeHtml.style.display = "block";
  }
}

showPokemonDetails();
