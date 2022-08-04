import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Planet = (props) => { 
  const {id, starwar} = useParams();
  const [displayData, setDisplayData] = useState({});
  
  useEffect(
    ()=>{
      axios.get(`http://swapi.dev/api/planets/${id}`)
      .then(response => {
        console.log("$$$$$$$$$$$$$$$$$$")
        console.log(response.data)
        setDisplayData(response.data);
      });
  },[id]) 

  return (
    <>
    <div>Planet</div>
    <div>
    <center>
            <h3>{displayData.name}</h3> {/* OR <h3>{props.displayData.name}</h3> */}
            <p>Climate: {displayData.climate} </p>
            <p>Terrain: {displayData.terrain}</p>
            <p>Surface Water: {displayData.surface_water}</p>
            <p>Population: {displayData.population}</p>
        </center>
    </div>
    </>
  )
}

export default Planet