import react, { useState } from 'react';
    
    
const NewDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            {props.message.map ( (value, index) => <p key={index}> Message: {value} </p>
                                )
            }

            {/* Comment: Display Message */} 
            {/* <pre>{ props.message }</pre> */}
        </>
    );
};
    
export default NewDisplay;