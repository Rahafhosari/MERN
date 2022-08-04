import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {
    const {num} = useParams();
  return (
    <>
    <div>Number</div>
    <p> This {num}</p>
    </>
  )
}

export default Number