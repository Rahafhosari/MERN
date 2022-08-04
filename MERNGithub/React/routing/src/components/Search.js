import React, {useState} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'


const Search = () => {
    const [option,setOption] = useState("people")
    const [id,setId] = useState(1)
    const [result,SetResult] = useState("")

    const searchDone = (e) =>{
        e.preventDefault();
        axios.get('https://swapi.dev/api/'+option+'/'+id+'/')
        .then(response=>{
            return SetResult(response.data)}); 
        //use navigate 
        navigate("/"+option+"/"+id);
        setId("");
        //meaning that the when click on th submit the button will route to the navigate route above
    }

    const searchHandler = (e) =>{
        setOption(e.target.value)
    }

    const idHandler = (e) =>{
        setId(e.target.value)
    }
    return (
        <>
        <div>
            <form onSubmit={searchDone} >
                <label for="starwars">Seach for:</label>
                <select id="starwars" name="starwars"  onChange={searchHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label for="id">ID: </label>
                <input type="number"onChange={idHandler}/>
                <input type="submit" value="Search" />
            </form>
        </div>
        <div>
            <h2>Planets:</h2>
            <center>
            <h3>{result.name}</h3>
            <p>Climate: {result.climate} </p>
            <p>Terrain: {result.terrain}</p>
            <p>Surface Water: {result.surface_water}</p>
            <p>Population: {result.population}</p>
            <Link />
            </center>
        </div>
        <div>
            <h2>People:</h2>
            <center>
            <h3>{result.name}</h3>
            <p>Height: {result.height}</p>
            <p>Mass: {result.mass} kg</p>
            <p>Hair Color: {result.hair_color}</p>
            <p>skin Color: {result.skin_color}</p>
            </center>
            <img/>
        </div>
        </>
    )
}

export default Search;