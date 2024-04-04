import "./styles/style.scss";
import pokemonArray from "./data/pokemon"
import { Pokemon } from "./data/types";

const cardContainer = document.querySelector(".card-container") as HTMLElement;

if (!cardContainer) throw new Error("something wrong with querySelector")

const handleCards = (pokemonArray: Pokemon[]) => {
    pokemonArray.map((pokemon: Pokemon) => {
        const card = document.createElement('div');
        if (!card) throw new Error("something wrong with querySelector")
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

handleCards(pokemonArray)


