import React, {useState, useEffect} from 'react'
import axios from 'axios';


const People = ({displayData}) => {
    return(
        <div >
            <center>
            <h3>{displayData.name}</h3>
            <p>Climate: {displayData.climate} </p>
            <p>Terrain: {displayData.terrain}</p>
            <p>Surface Water: {displayData.surface_water}</p>
            <p>Population: {displayData.population}</p>
            </center>
        </div>
    )
}

export default People;




// const [people, setPeople] = useState("people");
// const [person, setperson] = useState({
//     name: "",
//     gender: "",
//     height: "",
//     eye_color: "",
//     birth_year: ""
// });

// useEffect(() => {
//     axios.get(`https://swapi.dev/api/people/${id}`)

//     .then(response => {
//         setPeople(response.data)
//     })

//     .catch(err => {
//             console.log(err);})
//         }, []);
// return (
//     <div>
//         <h1>{people.name}</h1>
//         <p>Height :{people.height}</p>
//         <p>Mass :{people.mass}</p>
//         <p>Hair Color :{people.hair_color}</p>
//         <p>Skin Color :{people.skin_color}</p>
//     </div>
// )