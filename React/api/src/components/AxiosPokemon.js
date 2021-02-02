import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosPokemon = props => {
    const [pokemon, setPokemon] = useState([]);
    const fetchPoke = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response=>{setPokemon(response.data.results)}); 
    }
            return(
        <div className="box">
            <button onClick={fetchPoke} className="apiFetch">Axios Fetch Pokemon</button>
            <ul>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>(<div key={index}>Index: {index} | Pokemon Name: "{pokemon.name}"</div>))}
            </ul>
        </div>
    )
}   


export default AxiosPokemon;