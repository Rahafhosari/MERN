import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import style from '../App.css';

//Button Styles



const GameStatus = (props) => {
    const [players, setPlayers] = useState([])
    const [updatedPlayer, setUpdatedPlayer] = useState([])
    
    //State for color
    const [buttonColor, setButtonColor] = useState({bgColor: "whitesmoke"})


    //Get List of All Players
    useEffect( () => {
        axios.get('http://localhost:8000/api/allplayers')
            .then(response => setPlayers((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[updatedPlayer])

    // const buttonStyle=(playerStatus,buttonStatus)=>{
    //     if (buttonStatus==="Playing"&&playerStatus==="Playing") {
    //         return {color:'white',backgroundColor:'#bab86'}
    //     }
    //     else if (buttonStatus==="Not Playing"&&playerStatus==="Not Playing") {
    //         return {color:'white',backgroundColor:'#f1444'}
    //     }
    //     else if (buttonStatus==="Undecided"&&playerStatus==="Undecided") {
    //         return {color:'black',backgroundColor:'#ffff00'}
    //     }
    //     else 
    //     return {color:'black',backgroundColor:'white'}

    //     // return buttonStatus==="Playing"&&playerStatus==="Playing"?{color:'white',backgroundColor:'green'}
    //     // :buttonStatus==="Not Playing"&&playerStatus==="Not Playing"?{color:'white',backgroundColor:'red'}
    //     // :buttonStatus==="Undecided"&&playerStatus==="Undecided"?{color:'black',backgroundColor:'yellow'}
    //     // :{color:'black',backgroundColor:'white'}
    // }

    
    const colorChanger= () => {
        document.getElementById("btn1").style.backgroundColor = "#bab86";
        document.getElementById("btn2").style.backgroundColor = "#f14444";
        document.getElementById("btn3").style.backgroundColor = "#ffff00";
    }
        //OnCLick we're updateing the player status (so we're changing on the player object)
    const StatusChange = (e,id,name,position,playerStatus) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/player/'+ id, {
            name,
            position,
            playerStatus
        })
        .then(response => setUpdatedPlayer((response.data)))
        .catch(error => console.log("There was an issue: ", error))
    }
    
    const green = (playerStatus) => {
        if (playerStatus === "Playing")
            return "#bab86";
    }

    const red = (playerStatus) => {
        if (playerStatus === "Not Playing")
            return "#f14444";
    }

    const yellow = (playerStatus) => {
        if (playerStatus === "Undecided")
            return "#ffff00";
    }
    return (
        <>
            <div className="container">
                <div className="col-12">
                        <p>| <Link to="/players/list">Home</Link> |</p>
                </div>
            </div>
            
            <div className="container">
                <div className="col-12">
                    <p>ManagePlayers | <Link to="/status/game">Manage Player Status</Link></p>
                </div>
                <div className="col-12">
                    <p>List | <Link to="/addplayer"> Add Player </Link></p>
                </div>
                <table class="table table-striped table-hover ">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    {players.length > 0 && players.map((item,index)=>
                    {
                        return(
                    <tbody>
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.playerStatus}</td>
                        <td >
                            <button onClick={(e) => StatusChange(e, item._id, item.name, item.position, item.playerStatus,"Playing")} style={{background:  green(item.playerStatus),margin: "10px"}} id="btn1" type="button" class="btn btn-outline ">Playing</button>
                            <button onClick={(e) => StatusChange(e, item._id, item.name, item.position, item.playerStatus,"Not Playing")} style={{background:  red(item.playerStatus),margin: "10px"}} id="btn2" type="button" class="btn btn-outline ">Not Playing</button>
                            <button onClick={(e) => StatusChange(e, item._id, item.name, item.position, item.playerStatus,"Undecided")} style={{background:  yellow(item.playerStatus),margin: "10px"}} id="btn3" type="button" class="btn btn-outline ">Undecided </button>
                        </td>
                        </tr>
                    </tbody>
                            )
                    }
                                                        )
                    }
                    </table>
            </div>
        </>
    )   
}


export default GameStatus

// document.getElementById("button").onclick = () => setBackgroundColorById("paragraph", "blue");

// let setParagraphColor = () => { 
//     var color = document.getElementById("color").value;
//     document.getElementById("para").style.backgroundColor =color;
// }