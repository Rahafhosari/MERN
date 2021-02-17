import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';


const PlayersList = () => {
    const [players, setPlayers] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/allplayers')
            .then(response => setPlayers((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])

    const removeFromDom = (playerId,playerName) => {
        setPlayers(players.filter(player => player._id != playerId))
        setPlayers(players.filter(player => player.name != playerName))
        alert(`${playerName} has been deleted`);
    }

   
    return (
        <div className="container">
            <div className="col-12">
                    <p>List | <Link to="/addplayer"> Add Player </Link></p>
                </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Player Name</th>
                    <th scope="col">Prefered Position</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                {players.length > 0 && players.map((item,index)=>
                {
                    return(
                <tbody>
                    <tr>
                    <th scope="row">{item._id}</th>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td><DeleteButton playerId={item._id} successCallback={()=>removeFromDom(item._id,item.name)} /></td>
                    </tr>
                </tbody>
                        )
                }
                                                    )
                }
                </table>
        </div>
            )
}

export default PlayersList
