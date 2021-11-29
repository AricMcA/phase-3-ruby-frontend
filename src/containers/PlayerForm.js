import React, { useState, useEffect } from 'react'

const PlayerForm = () => {

    const [teams, setTeams] = useState([])

    const [ player, setPlayer ] = useState({
        name: '',
        position: '',
        team: ''
    })


    const handleChange = (e) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(player)
        setPlayer({
            name: '',
            position: '',
            team: ''
        })
    }

    const addPlayer = (player) => {
        fetch(`http://localhost:9292/players`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: player.name,
                position: player.position,
                team_id: player.team
            })
        })
    }

    useEffect(() => {
        fetch("http://localhost:9292/teams")
        .then(res => res.json())
        .then(data => {
            setTeams(data)
        })
    }, [])

    const teamsList = teams.map( t => <option value={t.id}>{t.name}</option>)
    
    return (
        <div className="form">
        <h3>Create a Player</h3>
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={ player.name } onChange={ handleChange } />
            </div>
            <div>
                <label>Position</label>
                <input type="text" name="position" value={ player.position } onChange={ handleChange } />
            </div>
            <div>
                <label>Team</label>
                <select value={player.team} onChange={handleChange} >
                    {teamsList}
                </select>
                <br/>
            </div>
            
            <input type="submit" value="Create Player" />
        </form>
        </div>
    )
}

export default PlayerForm
