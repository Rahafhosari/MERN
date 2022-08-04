import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Planets = ({displayData}) => {
    return(
        <div>
            <center>
            <h3>{displayData.name}</h3>
            <p>Height: {displayData.height}</p>
            <p>Mass: {displayData.mass} kg</p>
            <p>Hair Color: {displayData.hair_color}</p>
            <p>skin Color: {displayData.skin_color}</p>
            </center>
        </div>
    )
}

export default Planets;

// const [planet, setPlanet] = useState("planet");

// useEffect(() => {
//     axios.get(`https://swapi.dev/api/planet/${id}`)

//     .then(response => {
//         setPlanet(response.data)
//     })

//     .catch(err => {
//             console.log(err);})
//         }, []);

// return (
//     <div>
//         <h1>Name: {planet.name}</h1>
//         <p>Climate: {planet.climate}</p>
//         <p>Terrian: {planet.terrian}</p>
//         <p>Surface Water: {planet.surface_water}</p>
//         <p>Resident: {planet.residents}</p>
//     </div>
// )