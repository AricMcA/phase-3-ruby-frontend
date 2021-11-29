import React, {useEffect} from 'react'

const Player = ({player}) => {

    const deletePlayer = () => {
        fetch(`http://localhost:9292/players/${player.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json)
        .then(data => {
            console.log("player: ", player)
        })
    }
    
    return (
        <div>
            <h3>{player.name}</h3>
            <button onClick = {deletePlayer}>delete</button>
            <br/>
        </div>
    )
}

export default Player
