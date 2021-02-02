import React, {useState} from 'react'

const Form = () => {
    const [color,setColor] = useState("");
    // const colorHandler = () =>
    return (
        <div>
            <form >
                <label htmlFor="color">Color:</label>
                <input name="color" type="text" onChange={colorHandler}/>
            </form>
        </div>
    )
}

export default Form