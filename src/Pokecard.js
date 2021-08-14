import React from 'react';
import './Pokecard.css';

const getId = (id) => {
    const arr = id.toString().split('');
    while(arr.length < 3) {
        arr.unshift("0");
    }
    const res =  arr.join('');
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${res}.png`
}


class Pokecard extends React.Component {
    render() {
        const pokemon = this.props.p;
        const imgUrl = getId(pokemon.id)
        return (
            <li key={pokemon.id}>
                <p><img alt="pokemon" src={imgUrl}/></p>
                 <p>{pokemon.name}</p>
                 <p>{pokemon.type}</p>
                 <p>{pokemon.base_experience}</p>
            </li>
        );
    }
}

export default Pokecard;