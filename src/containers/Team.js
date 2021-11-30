import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Player from '../components/Player'

const Team = () => {

    const [team, setTeam] = useState({
        players: []
    })

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/teams/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setTeam(data)
        })
    }, [])

    

    const players = team.players.map( p => <Player key = {p.id} player = {p} />)
    return (
        <div>
            <br/>
            <h2>{team.name}</h2>
            <hr/>
            <h3>Players</h3>
            <br/>
            {players}
            <br/>
        </div>
    )
}

export default Team
