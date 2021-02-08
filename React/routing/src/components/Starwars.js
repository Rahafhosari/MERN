import axios from 'axios';
import React, {useState} from 'react';
import { Link } from '@reach/router';

const Starwars = (props) => {
    const [starwar, setStarwar] = useState();
    const [id, setid] = useState("");
//starwar handler
    const searchHandler = (e) => {
        setStarwar(e.target.value.toLowerCase());
    }
//id handler
    const idHandler = (e) => {
        setid(e.target.value);
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
                <label for="starwars">Seach for:</label>
                <select id="starwars" name="starwars" value={starwar} onChange={searchHandler}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label for="id">ID: </label>
                <input for="id" name="id" type="number" value={id} onChange={idHandler}/>
                <input type="submit" value="Search" />
                {/* <button onClick={ onClickHandler} > Search </button> */}
            </form>
        </div>
        {/* <div>
            <Link to ={`/${starwar}/${id}`}>Search</Link>
        </div> */}
        </>
    )
}

export default Starwars;
