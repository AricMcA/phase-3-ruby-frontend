import React, {useState, useEffect} from 'react'
import TeamLink from '../components/TeamLink'

const Teams = () => {
    const [teams , setTeams] = useState([])
    const [teamFormFlag, setTeamFormFlag] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/teams")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTeams(data)
        })
    }, [])

    const teamsList = teams.map( t => <TeamLink key = {t.id} team = {t} />)
    
    return (
        <div>
            <ul>
                {teamsList}
            </ul>
        </div>
    )
}

export default Teams
