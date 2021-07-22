import React, { useState } from 'react';

const MessageForm = (props) => {
    const [color, setColor] = useState("");
    const[height , setHeight] = useState()
    const[width , setWidth] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        props.youveGotMail( color , height , width);
        setColor("");
        setHeight(0);
        setWidth(0);

    };

    // Button Style
    const btnStyle = {
        background: "Green",
        color: "#fff",
    };

    return (
        <>
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea
                placeholder="Enter your box color"
                onChange={ (e) => setColor(e.target.value)}
                value={ color }
            ></textarea>
            <h2>Height</h2>
            <input type="number" onChange = { (e) => setHeight(e.target.value)}
                placeholder="Enter box height"
                value={ height } />

            <h2>Width</h2>
            <input type="number" onChange = { (e) => setWidth(e.target.value)}
                placeholder="Enter box width"
                value={ width } />
            <br/>
            <input style={btnStyle} type="submit" value="Send Message" />
        </form>
        {/* <p>{ msg }</p>  */}
        </>
    );


};
    
export default MessageForm;
