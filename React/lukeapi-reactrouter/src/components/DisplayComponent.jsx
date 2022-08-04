import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const DisplayComponent = () => {
    const {id, starwar} = useParams();
    const [displayData, setDisplayData] = useState({});

    let array = Object.keys(displayData).slice(0,9);

    console.log("s:"+starwar);
    console.log("i:"+id);
    useEffect(
        ()=>{
            axios.get(`http://swapi.dev/api/${starwar}/${id}`)
            .then(response => {
            console.log("$$$$$$$$$$$$$$$$$$")
            console.log(response.data)
            setDisplayData(response.data);
            })
            .catch(reject => setDisplayData({ error: "These aren't the droids you're looking for" }))
            },[starwar,id]) 

    return (
        <>
            <div>DisplayComponent</div>
            <h1>{displayData.name}</h1>
            {array.map(
                (key, index) => <p key={index}>{key}: {displayData[key]}</p>
            )}
        </>

    )
}

export default DisplayComponent