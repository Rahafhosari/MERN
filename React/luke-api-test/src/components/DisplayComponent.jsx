import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const DisplayComponent = () => {

    const {id, starwar} = useParams();
    const [displayData, setdisplayData] = useState({})

    //Limiting the number of keys to be showed for the fetched api object
    let arrayOfKeys = Object.keys(displayData).slice(0,10) 
    
    useEffect(
        ()=>{
            // axios.get("http://swapi.dev/api/"+starwar+"/"+id) #1
            axios.get(`http://swapi.dev/api/${starwar}/${id}`) //#2
            .then(res => {
                console.log(res.data)
                setdisplayData(res.data)
            })
                .catch(reject => setdisplayData({ error: "These aren't the droids you're looking for"}))
        },[id,starwar])

    return (
        <>
        <div>DisplayComponent</div>
        <h1>{displayData.name}</h1>
        <h2>{displayData.homeworld}</h2>
        {
            arrayOfKeys.map((key,index) => 
            <p>{key} : {displayData[key]}</p> //object[key] = value of this key
            )
        } 
        </>
    )
}

export default DisplayComponent