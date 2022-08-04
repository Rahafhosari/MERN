import axios from 'axios';
import React, {useState} from 'react';
import { Link } from '@reach/router';

const Starwars = (props) => {
    const [starwar, setStarwar] = useState("");
    const [id, setid] = useState("");
//starwar handler
    const searchHandler = (e) => {
        se
    }
//id handler
    const idHandler = (e) => {
        setid(e.target.value);
        console.log(e.target.value);
    }

//on click handler
    const onClickHandler = () => {
        props.handleClick(starwar,id)
    }
    // const onClickHandler = () =>{ }
    //onclick handler will change on the url
    //url/peoplefrom state/id
    
    return (    
        <>
        <div>
            <form>
                <label htmlFor="starwars">Seach for:</label>
                <select id="starwars" name="starwars" value={starwar} onChange={searchHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input htmlFor="id" name="id" type="number" value={id} onChange={idHandler}/>
                {/* <input type="submit" value="Search" /> */}
                <button onClick={ onClickHandler} > Search </button>
            </form>
        </div>
        {/* <div>
            <Link to ={`/${starwar}/${id}`}>Search</Link>
        </div> */}
        </>
    )
}

export default Starwars;
