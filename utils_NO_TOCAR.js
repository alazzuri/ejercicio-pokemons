// NO TOCAR
const statsNames = {
  hp: "hp",
  attack: "ataque",
  defense: "defensa",
  speed: "velocidad",
};

// NO TOCAR
function createPokemonCard(pokemon, order) {
  const body = document.querySelector("main");
  const cardContainer = document.createElement("div");
  cardContainer.className = "card";

  cardContainer.innerHTML = `
    <img
      src="..."
      class="card-img-top"
      alt="pokemon-${order}"
      id="imagen-pokemon-${order}"
    />
    <div class="card-body">
      <h5 class="card-title" id="nombre-pokemon-${order}">${pokemon.toUpperCase()}</h5>
      <p class="card-text">Skills</p>
      <span>HP</>
      <div class="contenedor-barra">
        <div id="barra-hp-${order}"></div>
        <span id="cantidad-hp-${order}"></span>
      </div>
      <span>Ataque</>
      <div class="contenedor-barra">
        <div id="barra-ataque-${order}"></div>
        <span id="cantidad-ataque-${order}"></span>
      </div>
      <span>Defensa</>
      <div class="contenedor-barra">
        <div id="barra-defensa-${order}"></div>
        <span id="cantidad-defensa-${order}"></span>
      </div>
      <span>Velocidad</>
      <div class="contenedor-barra">
        <div id="barra-velocidad-${order}"></div>
        <span id="cantidad-velocidad-${order}"></span>
      </div>
    </div>
  `;

  body.appendChild(cardContainer);
}

// NO TOCAR
async function getPokemonData(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const json = await response.json();
  const parsedData = {
    stats: json.stats
      .map((stat) => ({
        name: statsNames[stat.stat.name],
        amount: stat["base_stat"],
      }))
      .filter((stat) => stat.name),
    imagen: json.sprites["front_default"],
  };

  return parsedData;
}
