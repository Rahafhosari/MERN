import react, { useState } from 'react';
import $ from 'jquery';

const Tabs = (props) => {
    
    const tabs = ["Hello There! You're in tab one.","You moved,You're in tab two.","Okay this is the last Tab...You're in tab Three.","JAD"]

    

    const onClickHandler = (e, value,index) => {
        console.log(e.target);
        console.log(e.target.value);
        console.log(e);

        props.newTab(value);
        // alert("YouClicked Tab"+(index+1));
        $(".tabStyle").css({"color":"red"});
        $(e.target).css({"color":"blue"});

        // const styling = document.getElementsByClassName("tabStyle");
        // for (let i = 0; i < styling.length; i++) {
        //         styling[i].style.backgroundColor = "white";
        //         styling[i].style.color = "black";
        //     }
        //     e.target.style.backgroundColor = "black"
        //     e.target.style.color = "white"
    }

    return(
            tabs.map( (content, index) => {
                return <button className="tabStyle" onClick={ (e) => onClickHandler(e, content,index) }>{ "Tab" + (index+1) }</button>
            })
        );

    // return(
    // tabs.map( (item, index) => {
    //     return <button key={ index } onClick={ e => onClickHandler(e, item) }>{ "Tab " +  (index + 1)}</button>
    // })
    // )
}
export default Tabs;