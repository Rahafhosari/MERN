import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


const People = () => { // OR Planet = ({displayData})
  const {id} = useParams();
  const [displayData, setDisplayData] = useState({});

  useEffect(
    ()=>{
      axios.get(`http://swapi.dev/api/people/${id}`)
      .then(response => {
        console.log("$$$$$$$$$$$$$$$$$$")
        console.log(response.data)
        setDisplayData(response.data);
      });
  },[id])  

  return (
    <>
    <div>People</div>
    <div>
        <center>
            <h3>{displayData.name}</h3>
            <p>Height: {displayData.height}</p>
            <p>Mass: {displayData.mass} kg</p>
            <p>Hair Color: {displayData.hair_color}</p>
            <p>skin Color: {displayData.skin_color}</p>
        </center>
    </div>
    </>
  )
}

export default People