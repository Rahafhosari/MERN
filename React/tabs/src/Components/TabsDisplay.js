import react, { useState } from 'react';
import $ from 'jquery';

const TabsDisplay = (props) => {
    const tabStyle = {
        border: "1px solid",
    };

    $(".displayShow").css("display", "none");
    // $(".displayShow").slideDown("meduim");
    $(".displayShow").fadeIn();

    return (
        <>   
            {/* <div style={tabStyle} className="displayShow">
                <p >{props.content}</p>
            </div> */}
            {props.content 
            ?
            <div style={tabStyle} className="displayShow">
                <p >{props.content}</p>
            </div>
            : <div></div>
            }
        </>
    );
};

export default TabsDisplay;