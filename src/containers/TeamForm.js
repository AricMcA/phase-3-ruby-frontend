import React, {useState} from 'react'


const TeamForm = () => {
    
    const [ team, setTeam ] = useState({
        name: ''
    })


    const handleChange = (e) => {
        setTeam({
            ...team,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addTeam(team)
        setTeam({
            name: ''
        })
    }

    const addTeam = (team) => {
        fetch(`http://localhost:9292/teams`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: team.name
            })
        })
    }
    
    return (
        <div>
            <br/>
            <h3>Create Team</h3>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={ team.name } onChange={ handleChange } />
                </div>

                <input type="submit" value="Create Team" />
            </form>

            
        </div>
    )
}

export default TeamForm
