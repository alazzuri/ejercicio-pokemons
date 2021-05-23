async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACION SOBRE LOS POKEMONS
  const pokemonData = await getPokemonData(name);

  //Actividades

  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.
  const imagen = document.querySelector(`#imagen-pokemon-${order}`);
  imagen.src = pokemonData.imagen;

  // 2) Utilizando los stats de cada pokemon, deberas rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // deberas decidir el color que tendra la barra en cada caso:
  // Si la habilidad es menor a 35, la barra sera de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra sera amarilla
  // Si la habilidad es igual o mayor a 70, la barra sera de color verde.
  // Deberas utilizar las clases que se encuentran en el archivo styles.css
  pokemonData.stats.forEach((stat) => {
    const barra = document.querySelector(`#barra-${stat.name}-${order}`);

    barra.style.width = `${stat.amount}%`;

    if (stat.amount < 35) {
      barra.classList.add("rojo");
    } else if (stat.amount < 70) {
      barra.classList.add("amarillo");
    } else {
      barra.classList.add("verde");
    }
  });
}

//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVOTIRO!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  fillPokemonData(pokemon, pokemonNumber);
});
