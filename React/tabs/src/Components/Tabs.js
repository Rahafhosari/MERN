import React, { useState } from 'react';

const Tabs = (tab,content) => {
    const tabs = [
        {tab:"Tab 1",content:"Hello There! You're in tab one."},
        {tab:"Tab 2",content:"You moved,You're in tab two."},
        {tab:"Tab 1",content:"Okay this is the last Tab...You're in tab one."}
    ]
     const [state, setState] = useState({
        content:"",   
        color:"",
        id:""
    });  

    const onClickHandler = (e,index) => {
        setState({
            content:tabs[index].content,
            color:"olivegreen",
            id:index
        })
    }
    return (
        <div>
            {/* display content in tab */}
            { tabs.map((tab,i)  => { 
                return
                <button onClick={(e)=> onClickHandler(e,i)} key={i} {...tab}
                style={{color:"green",backgroundColor:state.id===i&&state.color}}> {tab.tab}</button> }
                )
            }

            <p>{state.content}</p>
        </div>
    )
}

export default Tabs;