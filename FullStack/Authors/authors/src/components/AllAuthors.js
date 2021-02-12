import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const AllAuthors = () => {
    const [authors, setAuthors] = useState([])

    useEffect( () => {
        //axios.get("URL IS HERE")
        axios.get('http://localhost:8000/api/authors')
            .then(response => setAuthors((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])

    const navigateToNewRoute = () => {
        navigate("/new");
    }

    return (
        <div className="Container">
            <h2>This is a List of All Authors: </h2>
            {authors.length > 0 && authors.map((item,index)=>
                {
                    return<div key={index}>{item.name}</div>
                })
            }
            <input type='button' value='Click Here to Add a New Author' onClick={navigateToNewRoute}/>
        </div>
    )
}

export default AllAuthors;