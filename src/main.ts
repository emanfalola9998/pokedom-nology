import "./styles/style.scss";
import pokemonArray from "./data/pokemon"
import { Pokemon } from "./data/types";

const cardContainer = document.querySelector(".card-container") as HTMLElement;
const limitPokemonInput = document.querySelector(".limit") as HTMLInputElement;
const pokemonSearch = document.querySelector(".search") as HTMLInputElement;

if (!cardContainer) throw new Error("something wrong with querySelector")

// limitPokemonInput.value = pokemonArray.length.toString()




const handleCards = (pokemonArray: Pokemon[]) => {
    const limitPokemon = parseInt(limitPokemonInput.value);
    const pokemonSearched = pokemonSearch.value
    cardContainer.innerHTML = '';

    const filteredPokemonNames = pokemonArray.filter(name => name.name.startsWith(pokemonSearched))

    filteredPokemonNames.slice(0, limitPokemon).forEach((pokemon: Pokemon) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML =  `
            <img class="card__image" src="${pokemon.sprite}" />
            <div class="card__content">
                <div class="card__heading">
                    ${pokemon.name}
                </div>
                <div class="card__text">
                    ${pokemon.types.length > 1 ? `${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon.` : `${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} type pokemon.`}
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    })
}

limitPokemonInput.addEventListener('input', () => {
    handleCards(pokemonArray);
});




