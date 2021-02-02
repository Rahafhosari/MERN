import React, {useEffect, useState} from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    },[pokemon]);
    return (
        <div>
            <button onClick={useEffect}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>(<div key={index}>Index: {index} | Pokemon Name: "{pokemon.name}"</div>))}
        </div>
    );
}

export default Pokemon;