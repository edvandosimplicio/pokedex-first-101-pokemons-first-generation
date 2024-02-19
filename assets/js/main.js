/*--transformando pokemons em Lists HTML-->*/
function convertPokemonToLi(pokemon){
    return `
    
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">

            </div>

        </li>

    `
}

//adicionando nossa estrutura de lista html por id em uma constante
const pokemonList = document.getElementById('pokemonList')


    // 1. pokeApi é um objeto que possui o método .getPokemons() com uma arrowfunction com todo o código de requisição http
    // 2. .then() é o último método padrão que com arrowfunction retorna todo os elementos dos pokemons convertido e filtrado
    pokeApi.getPokemons().then((pokemons = []) => {

        //adicionando em uma const o  mapeamento(repetição) dos pokemons pelo tamanho limitado na url(10 vezes) - convertendo em html e juntando todos sem vírgula.
        const newHtml = pokemons.map(convertPokemonToLi).join('')

        //adiciona (em formato html) todo o processo acima na nossa atual lista de pokemon.
        pokemonList.innerHTML = newHtml
    })