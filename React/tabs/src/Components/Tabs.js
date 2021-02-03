import react, { useState } from 'react';

const Tabs = (props) => {
    const tabs = ["Hello There! You're in tab one.","You moved,You're in tab two.","Okay this is the last Tab...You're in tab one."]

    const onClickHandler = (e,item) => {props.tabs(item);}
    
    return(
    tabs.map( (item, index) => {
        return <button key={ index } onClick={ e => onClickHandler(e, item) }>{ "Tab " +  (index + 1)}</button>
    })
    )
}
export default Tabs;