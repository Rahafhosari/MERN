import React, {useEffect, useState} from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPoke = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }
    return (
        <div className="box">
            <button onClick={fetchPoke} className="apiFetch">Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>(<div key={index}>Index: {index} | Pokemon Name: "{pokemon.name}"</div>))}
        </div>
    );
}

export default Pokemon;