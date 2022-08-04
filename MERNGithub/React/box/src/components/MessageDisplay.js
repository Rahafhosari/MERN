import React from 'react'

const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <div>
                { props.message.map((value , index) =>{

                let boxstyle ={background:value.color, height:value.height+"px", width:value.width+"px", display:"inline-block", margin:"5px", 
                            color:"black"};
                            
                return <div key ={index} style={boxstyle}>{value.color} Box <h6>Index {index}</h6></div>
                                                        }
                                    )
            }
            </div>
        </>
    );
};
    
export default MessageDisplay;