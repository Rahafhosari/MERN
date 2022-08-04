import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

const Search = () => {
    
    const [starwar, setStarwar] = useState("");
    const [id, setId] = useState();
    let history = useHistory();

    const searchHandler = (e) => {
        setStarwar(e.target.value.toLowerCase());
        console.log("*****"+e.target.value);
    }

    const idHandler = (e) => {
        setId(e.target.value);
        console.log(e.target.value);
    }

    const search = (e) =>{
        e.preventDefault();
        console.log("x: "+starwar +" id: "+ id);
        // props.handleData(id,starwar);
        history.push(`/${starwar}/${id}`) //localhost:3000/:type/:id
    }

  return (
    <>
    <h1>Search</h1>
    <div>
        <form onSubmit={search}> {/*<form onSubmit={search}></form> */}
            {/* ----- Drop Down List ------*/}
            <label htmlFor="starwars">Search for:</label>
            <select id="starwar" name="starwar" value={starwar} onChange={(searchHandler)}>
                <option key={0} value="none">-</option>
                <option key={1} value="people">People</option>
                <option key={2} value="planets">Planets</option>
            </select>
            &nbsp;  &nbsp;
            {/* ----- Input for ID ------*/}
            <label htmlFor="id">ID: </label>
            <input name="id" type="number" value={id} onChange={idHandler}/>
           
            &nbsp;  &nbsp;

            <button type="submit" > Search </button>
        </form>
    </div>
    </>
  )
}

export default Search